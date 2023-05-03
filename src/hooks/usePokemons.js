import { useEffect, useState } from 'react'
import { getPokemon, getPokesByGen } from '../services/getPokeApiData'
export async function usePokemons({ filterText, filterGen }) {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const entries = getPokesByGen(filterGen)
    const resPoke = entries.then(async (res) => {
      const newPokes = await Promise.all(
        res
          .filter((p) => p.name.includes(filterText))
          .map((p) => getPokemon(p.name))
      )
      setPokemons([...newPokes])
    })

  }, [filterText, filterGen])

  return { pokemons }
}