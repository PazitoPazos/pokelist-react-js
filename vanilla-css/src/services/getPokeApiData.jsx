const api_url = 'https://pokeapi.co/api/v2/'
const api_url_poke = api_url + 'pokemon/'
const api_url_type = api_url + 'type/'
const api_url_gen = api_url + 'generation/'

export async function getData(url) {
  const resData = await fetch(url)
  const data = await resData.json()

  return data
}

export async function getPokemons(limit = 20, page = 0) {
  const pokeListUrl = api_url_poke + `?limit=${limit}&offset=${page * limit}`

  const resList = await fetch(pokeListUrl)
  const pokeList = await resList.json()
  const pokeEntries = pokeList.results.map((poke) => poke)

  return pokeEntries
}

export async function getPokemonById(id) {
  const pokeById = api_url_poke + id
  return getData(pokeById)
}

export async function getPokemonByName(name) {
  const pokeByName = api_url_poke + name
  return getData(pokeByName)
}

export async function getPokeTypes() {
  const resList = await fetch(api_url_type)
  const typeList = await resList.json()
  const typeEntries = typeList.results.map((type) => type)

  return typeEntries
}

export async function getTypeById(id) {
  const typeById = api_url_type + id
  return getData(typeById)
}

export async function getPokeGens() {
  const resList = await fetch(api_url_gen)
  const genList = await resList.json()
  const genEntries = genList.results.map((gen) => gen)

  return genEntries
}

export async function getGenById(id) {
  const genById = api_url_gen + id
  return getData(genById)
}