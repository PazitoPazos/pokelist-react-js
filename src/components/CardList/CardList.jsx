import './CardList.css'
import Card from '../Card/Card'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'
import { useEffect, useState } from 'react'
import { useOnScreen } from '../../hooks/useOnScreen'
import { useFilters } from '../../hooks/useFilters'
import { usePokemons } from '../../hooks/usePokemons'

export default function CardList () {
  const { measureRef, isIntersecting, observer } = useOnScreen()
  const [pokesPerPage, setPokesPerPage] = useState(20)
  const [page, setPage] = useState(1)
  const { filters } = useFilters()
  const { pokemons, totalPages, isLoading } = usePokemons({ filters, pokesPerPage, page })

  const hasMorePokemons = page < totalPages

  useEffect(() => {
    // Cuando se interseca con el último elemento visible, incrementar la cantidad de Pokémon por página
    if (isIntersecting && !isLoading && hasMorePokemons) {
      setPokesPerPage((prevPokesPerPage) => prevPokesPerPage + 20)
      observer.disconnect()
    }
  }, [isIntersecting, isLoading, hasMorePokemons])

  useEffect(() => {
    // Cuando hay cambios en los filtros, reiniciar la cantidad de Pokémon por página y la página actual
    setPokesPerPage(20)
    setPage(1)
  }, [filters])

  useEffect(() => {
    // Cargar nuevos Pokémon si cambia la página y hay más para cargar
    if (page > 1 && hasMorePokemons && !isLoading) {
      setPage((prevPage) => prevPage + 1)
    }
  }, [page, hasMorePokemons, isLoading])

  return (
    <>
      <div className='CardList'>
        {pokemons
          .map((p, i) => {
            if (i === pokemons.length - 1) {
              return <Card measureRef={measureRef} key={i} pkData={p} />
            }

            return <Card key={i} pkData={p} />
          })}
      </div>
      {isLoading && <LoadingSpinner />}
    </>
  )
}
