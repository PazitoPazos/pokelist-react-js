import { POKE_GENS } from '../data/pokeGens'

const API_URL = 'https://pokeapi.co/api/v2/'
const API_URL_POKE = API_URL + 'pokemon/'
const API_URL_TYPE = API_URL + 'type/'

export async function getApiData (url) {
  const resData = await fetch(url)
  const data = await resData.json()

  return data
}

export async function getPokemons (page = 0, limit = 40, offset = -1) {
  offset = offset === -1 ? page * limit : offset

  const pokeListUrl = API_URL_POKE + `?limit=${limit}&offset=${offset}`
  const pokeList = await getApiData(pokeListUrl)
  const pokeEntries = pokeList.results.map((poke) => poke)

  return pokeEntries
}

export async function getPokemon (id) {
  const pokeUrl = API_URL_POKE + id
  return getApiData(pokeUrl)
}

export async function getPokeTypes () {
  const resList = await fetch(API_URL_TYPE)
  const typeList = await resList.json()
  const typeEntries = typeList.results.map((type) => type)

  return typeEntries
}

export async function getTypeById (id) {
  const typeById = API_URL_TYPE + id
  return getApiData(typeById)
}

export async function getPokesByGen (id) {
  let offset
  let limit

  if (id === 'all') {
    const lastGen = POKE_GENS[POKE_GENS.length - 1]
    offset = 0
    limit = lastGen.limit + lastGen.offset
  } else {
    const gen = POKE_GENS.find((g) => {
      const genId = g.id + ''
      return genId === id
    })
    offset = gen.offset
    limit = gen.limit
  }

  return getPokemons(0, limit, offset)
}
