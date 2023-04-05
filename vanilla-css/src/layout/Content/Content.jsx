import './Content.css'
import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'

export default function Content() {
  const [poke, setPoke] = useState([])
  const [pkSprites, setPkSprites] = useState([])

  async function getPokemon() {
    const pokeListUrl = 'https://pokeapi.co/api/v2/pokemon/'

    const resList = await fetch(pokeListUrl)
    const pokeList = await resList.json()

    const pokeEntries = pokeList.results.map((poke) => poke)

    const resPoke = pokeEntries.map(async (entry) => {
      const resData = await fetch(pokeListUrl + `${entry.name}`)
      const pokeData = await resData.json()

      return pokeData
    })

    const results = await Promise.all(resPoke)
    setPoke(results)
  }

  useEffect(() => {
    getPokemon()
  }, [])

  return (
    <div className='Content'>
      <div className='List-of-cards'>
        {poke.map((p, i) => (
          <Card key={i} pkData={p} />
        ))}
      </div>
    </div>
  )
}
