const API_URL = 'https://pokeapi.co/api/v2/'
const API_URL_POKE = API_URL + 'pokemon/'
const API_URL_TYPE = API_URL + 'type/'

export async function getApiData (url) {
  const resData = await fetch(url)
  const data = await resData.json()

  return data
}

export async function getPokemonEntries (page = 0, limit = 40, offset = null) {
  offset = offset ? page * limit : offset

  const pokeListUrl = API_URL_POKE + `?limit=${limit}&offset=${offset}`
  const pokeList = await getApiData(pokeListUrl)
  const pokeEntries = pokeList.results.map((poke) => poke)

  return pokeEntries
}

export async function getTypeById (id) {
  const typeById = API_URL_TYPE + id
  return getApiData(typeById)
}

export async function getPokemon (id) {
  const pokeUrl = API_URL_POKE + id
  return getApiData(pokeUrl)
}
