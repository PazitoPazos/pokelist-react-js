import React, { useCallback, useEffect, useState } from 'react'
import './CardList.css'
import Card from '../Card/Card'
import useOnScreen from '../../hooks/useOnScreen'
import {
  getPokesByGen,
  getPokemon,
  getPokemons,
} from '../../services/getPokeApiData'
import { pokeGens } from '../../utils/pokeGens'

export default function CardList() {
  const [pokes, setPokes] = useState([])
  const [page, setPage] = useState(0)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const { measureRef, isIntersecting, observer } = useOnScreen()

  const MAX_POKES = 1008

  async function getCards() {
    await getPokemons(page, 40).then(async (pks) => {
      const resPoke = await pks.map(async (p) => {
        return getPokemon(p.name).then((p) => p)
      })

      const results = await Promise.all(resPoke)
      const newPokes = results
      setPokes([...pokes, ...newPokes])
      setHasMore(pokes.length <= MAX_POKES)
      setIsLoading(false)
    })
  }

  // async function getCards() {
  //   const b = await getPokesByGen(2, page, 40)

  //   const resPoke = b.map((p) => {
  //     return getPokemon(p.name).then((p) => p)
  //   })

  //   const results = await Promise.all(resPoke)
  //   const newPokes = results
  //   setPokes([...pokes, ...newPokes])
  //   setHasMore(pokes.length < pokeGens[2 - 1]['limit'] - 40)
  //   setIsLoading(false)
  // }

  useEffect(() => {
    getCards()
  }, [page])

  const loadMore = useCallback(() => {
    setPage((page) => page + 1)
    setIsLoading(true)
  }, [])

  useEffect(() => {
    if (isIntersecting && hasMore) {
      loadMore()
      observer.disconnect()
    }
  }, [isIntersecting, hasMore, loadMore])

  return (
    <div className='CardList'>
      {pokes.map((p, i) => {
        if (i >= MAX_POKES) return

        if (i === pokes.length - 1) {
          return <Card measureRef={measureRef} key={i} pkData={p} />
        }

        return <Card key={i} pkData={p} />
      })}
      {isLoading && <li>Loading...</li>}
    </div>
  )
}
