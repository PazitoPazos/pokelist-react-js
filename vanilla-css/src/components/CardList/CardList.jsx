import React, { useEffect } from 'react'
import './CardList.css'
import Card from '../Card/Card'
import useOnScreen from '../../hooks/useOnScreen'

export default function CardList({ hasMore, isLoading, loadMore, pokemons }) {
  const { measureRef, isIntersecting, observer } = useOnScreen()

  useEffect(() => {
    if (isIntersecting && hasMore) {
      loadMore()
      observer.disconnect()
    }
  }, [isIntersecting, hasMore, loadMore])

  return (
    <div className='List-of-cards'>
      {pokemons.map((p, i) => {
        if (i > 1007) return

        if (i === pokemons.length - 1) {
          return <Card measureRef={measureRef} key={i} pkData={p} />
        }

        return <Card key={i} pkData={p} />
      })}
      {isLoading && <li>Loading...</li>}
    </div>
  )
}
