import React, { useCallback, useEffect, useState } from 'react'
import './CardList.css'
import Card from '../Card/Card'
import useOnScreen from '../../hooks/useOnScreen'
import { usePokemons } from '../../hooks/usePokemons'
import { getPokesByGen, getPokemon } from '../../services/getPokeApiData'
import { sortByAz, sortById } from '../../utils/sortByMethods'
import { filterByTypes } from '../../utils/filterByTypes'

export default function CardList({
  filterText,
  filterType,
  filterGen,
  sortBy,
}) {
  const [pokes, setPokes] = useState([])
  const [showPokes, setShowPokes] = useState([])
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const { measureRef, isIntersecting, observer } = useOnScreen()

  useEffect(() => {
    setIsLoading(true)
    setPokes([])
    setPage(1)
    const entries = getPokesByGen(filterGen)
    const resPoke = entries.then(async (res) => {
      const newPokes = await Promise.all(
        res
          .filter((p) => p.name.includes(filterText))
          .map((p) => getPokemon(p.name))
      )

      const filteredPokes = filterType !== 'all' ? filterByTypes(newPokes, filterType) : newPokes

      setPokes([...filteredPokes])
    })

    setIsLoading(false)
  }, [filterText, filterType, filterGen])

  const loadMore = useCallback(() => {
    setPage((page) => page + 1)
    // setIsLoading(true)
  }, [])

  useEffect(() => {
    if (isIntersecting && hasMore) {
      loadMore()
      observer.disconnect()
    }
  }, [isIntersecting, hasMore, loadMore])

  return (
    <div className='CardList'>
      {pokes
        .sort(sortBy === 'sbid' ? sortById : sortByAz)
        .slice(0, 40 * page)
        .map((p, i) => {
          if (i === pokes.slice(0, 40 * page).length - 1) {
            return <Card measureRef={measureRef} key={i} pkData={p} />
          }

          return <Card key={i} pkData={p} />
        })}
      {/* {isLoading && <li>Loading...</li>} */}
    </div>
  )
}
