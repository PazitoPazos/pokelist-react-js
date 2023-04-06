import './Content.css'
import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import { getPokemonByName, getPokemons } from '../../services/getPokeApiData'

export default function Content() {
  const [poke, setPoke] = useState([])

  useEffect(() => {
    getPokemons().then(async (pokes) => {
      const resPoke = pokes.map(async (p) => {
        return getPokemonByName(p.name).then((p) => p)
      })

      const results = await Promise.all(resPoke)
      setPoke(results)
    })
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
