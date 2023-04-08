import './Content.css'
import { useCallback, useEffect, useState } from 'react'
import { getPokemonByName, getPokemons } from '../../services/getPokeApiData'
import CardList from '../../components/CardList/CardList'

export default function Content() {
  const [pokes, setPokes] = useState([])
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const MAX_POKES = 1008

  async function getCards() {
    await getPokemons(page).then(async (pks) => {
      const resPoke = await pks.map(async (p) => {
        return getPokemonByName(p.name).then((p) => p)
      })

      const results = await Promise.all(resPoke)
      const newPokes = results
      setPokes([...pokes, ...newPokes])
      setHasMore(pokes.length <= MAX_POKES)
      setIsLoading(false)
    })
  }

  useEffect(() => {
    getCards(page)
  }, [page])

  const loadMore = useCallback(() => {
    setPage((page) => page + 1)
    setIsLoading(true)
  }, [])

  return (
    <div className='Content'>
      <CardList
        hasMore={hasMore}
        isLoading={isLoading}
        loadMore={loadMore}
        pokemons={pokes}
      />
    </div>
  )
}
