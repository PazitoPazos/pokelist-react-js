import { pokeGens } from '../utils/pokeGens'

const api_url = 'https://pokeapi.co/api/v2/'
const api_url_poke = api_url + 'pokemon/'
const api_url_type = api_url + 'type/'

export async function getApiData(url) {
  const resData = await fetch(url)
  const data = await resData.json()

  return data
}

export async function getPokemons(page = 0, limit = 40, offset = -1) {
  offset = offset === -1 ? page * limit : offset

  const pokeListUrl = api_url_poke + `?limit=${limit}&offset=${offset}`
  const pokeList = await getApiData(pokeListUrl)
  const pokeEntries = pokeList.results.map((poke) => poke)

  return pokeEntries
}

export async function getPokemon(id_name) {
  const pokeUrl = api_url_poke + id_name
  return getApiData(pokeUrl)
}

export async function getPokeTypes() {
  const resList = await fetch(api_url_type)
  const typeList = await resList.json()
  const typeEntries = typeList.results.map((type) => type)

  return typeEntries
}

export async function getTypeById(id) {
  const typeById = api_url_type + id
  return getApiData(typeById)
}

export async function getPokesByGen(id) {
  let offset;
  let limit;

  if (id === 'all') {
    const lastGen = pokeGens[pokeGens.length - 1]
    offset = 0
    limit = lastGen.limit + lastGen.offset
  } else {
    const gen = pokeGens.find((g) => g.id == id)
    offset = gen.offset
    limit = gen.limit
  }

  return getPokemons(0, limit, offset)
}
