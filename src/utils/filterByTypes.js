import { POKE_TYPES } from '../data/pokeTypes'

export function filterByTypes (pokemons, filterType) {
  return pokemons.filter(pokemon => {
    return filterByType(pokemon, filterType)
  })
}

function filterByType (pokemon, filterType) {
  const typeName = POKE_TYPES.find(type => (type.id + '') === filterType).name
  const fType = pokemon.types[0].type.name === typeName
  let sType = false
  if (pokemon.types.length === 2) {
    sType = pokemon.types[1].type.name === typeName
  }

  return fType || sType
}
