import {useEffect} from 'react'

const API_URL = 'https://pokeapi.co/api/v2/'

export function getPokeInfo(name) {
  const PK = fetch(API_URL + 'pokemon/' + name)
    .then((res) => res.json())
    .then((response) => response.sprites.front_default)
}

export default function getPokemons(limit = '', offset = '') {
  let sep = ''

  if (limit !== '') {
    sep = '?'
    limit = 'limit=' + limit
  }

  if (offset !== '') {
    sep = '?'
    offset = 'offset=' + offset
  }

  let final_url = API_URL + 'pokemon/' + sep + limit + offset

  const PK = fetch(final_url)
    .then((res) => res.json())
    .then((response) => {
      const { results } = response
      const pkNames = results.map(pk => console.log(getPokeInfo(pk.name)))
    })
}

// getPokemons(12)