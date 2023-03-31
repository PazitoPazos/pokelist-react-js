import './Content.css'
import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import getPokemons from '../../services/getPokemons'

export default function Content() {
  const [poke, setPoke] = useState('')
  async function getPokemon() {
    const pokeListUrl = 'https://pokeapi.co/api/v2/pokemon/'

    const resList = await fetch(pokeListUrl)
    const pokeList = await resList.json()

    const pokeEntry = pokeList.results.find((poke) => poke.name === 'charmander')

    const resPoke = await fetch(pokeEntry.url)
    const charmander = await resPoke.json()
    const charSprite = await charmander.sprites.front_default

    setPoke(charSprite)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <div className='Content'>
      <div className='List-of-cards'>
        <Card url={poke} />
      </div>
    </div>
  )
}
