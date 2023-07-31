import { useEffect, useState, useCallback } from 'react'
import { getPokemon, getPokemonEntries, getTypeById } from '../services/getPokeApiData'
import { sortByAz, sortById } from '../utils/sortByMethods'
import { POKE_GENS } from '../data/pokeGens'
import { filterByTypes } from '../utils/filterByTypes'

function filterPokemons (entries, filterSearch, filterGen, sortBy) {
  const actualGen = POKE_GENS[filterGen - 1]
  const offset = filterGen !== 'all' && actualGen.offset
  const limit = filterGen !== 'all' && actualGen.limit

  const resByGen = filterGen === 'all' ? entries : entries.slice(offset, limit + offset)
  const resBySearch = resByGen.filter((p) => p.name.includes(filterSearch))
  const resBySort = resBySearch.sort(sortBy === 'sbid' ? sortById : sortByAz)

  return resBySort
}

export function usePokemons ({ filters, pokesPerPage, page }) {
  const [pokemons, setPokemons] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const { search: filterSearch, type: filterType, gen: filterGen, sortBy } = filters

  async function getEntries (type) {
    if (type === 'all') {
      const allEntries = await getPokemonEntries(0, 8000)
      return allEntries
    }

    const typeData = await getTypeById(type)
    const typeEntries = typeData.pokemon.map((p) => p.pokemon)

    return typeEntries
  }

  const fetchPokemons = useCallback(async () => {
    setIsLoading(true)
    try {
      const entries = await getEntries(filterType)
      const filteredPokemons = filterPokemons(entries, filterSearch, filterGen, sortBy)
      const pokesByPage = filteredPokemons.slice((page - 1) * pokesPerPage, page * pokesPerPage)

      setTotalPages(filteredPokemons.length / pokesPerPage)

      const newPokes = await Promise.all(pokesByPage.map((p) => getPokemon(p.name)))
      const pokesByType = filterType !== 'all' ? filterByTypes(newPokes, filterType) : newPokes

      setPokemons(pokesByType)
    } catch (error) {
      // Manejar errores de manera apropiada aquí
    } finally {
      setIsLoading(false)
    }
  }, [filterSearch, filterType, filterGen, sortBy, pokesPerPage])

  useEffect(() => {
    fetchPokemons()
  }, [fetchPokemons])

  return { pokemons, totalPages, isLoading }
}
