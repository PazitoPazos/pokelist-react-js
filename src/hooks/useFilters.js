import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const filterPokemons = (pokemons) => {
    return pokemons.filter(pokemon => {
      return (
        (
          filters.type === 'all' ||
          pokemon.types.includes(filters.type)
        ) &&
        (
          filters.gen === 'all' ||
          pokemon.gen === filters.gen
        )
      )
    })
  }

  return { filters, setFilters, filterPokemons }
}
