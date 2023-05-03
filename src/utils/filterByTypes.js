export function filterByTypes(pokemons, filterType) {
  return pokemons.filter(pokemon => {
    return filterByType(pokemon, filterType)
  })
}

function filterByType(pokemon, filterType) {
  let fType = pokemon.types[0].type.name === filterType
  let sType = false
  if (pokemon.types.length === 2) {
    sType = pokemon.types[1].type.name === filterType
  }
  
  return fType || sType
}