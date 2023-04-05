const API_URL = 'https://pokeapi.co/api/v2/'

export async function getPokemon() {
  const pokeListUrl = API_URL + 'pokemon/'

  const resList = await fetch(pokeListUrl)
  const pokeList = await resList.json()

  const pokeEntries = pokeList.results.map((poke) => poke)

  const resPoke = pokeEntries.map(async (entry) => {
    const resData = await fetch(pokeListUrl + `${entry.name}`)
    const pokeData = await resData.json()

    return pokeData
  })

  const results = await Promise.all(resPoke)

  return results
  // setPoke(results)
}