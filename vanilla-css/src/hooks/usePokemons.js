import { useState } from 'react'
import { getPokemons, getPokemon } from '../services/getPokeApiData'
export async function usePokemons({ page }) {
  const [pokemons, setPokemons] = useState([])

  const entries = await getPokemons(page)
  const mappedEntries = entries.map(async (p) => {
    const pokes = await getPokemon(p.name)
    const mappedPokes = pokes.map((poke) => ({
      id: poke.id, name: poke.name, sprites: poke.sprites.front_default
    }))

    return setPokemons(mappedPokes)
  })

  return pokemons
}