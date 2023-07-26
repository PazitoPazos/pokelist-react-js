import './Filters.css'
import SearchBar from '../SearchBar/SearchBar'
import Select from '../Select/Select'
import { useFilters } from '../../hooks/useFilters'
import { POKE_TYPES } from '../../data/pokeTypes'
import { POKE_GENS } from '../../data/pokeGens'
import { SORT_BY } from '../../data/sortBy'

function Filters () {
  const { filters, setFilters } = useFilters()

  const handleChangeSearch = (event) => {
    setFilters(prevState => ({
      ...prevState,
      search: event.target.value
    }))
  }

  const handleChangeType = (event) => {
    setFilters(prevState => ({
      ...prevState,
      type: event.target.value
    }))
  }

  const handleChangeGen = (event) => {
    setFilters(prevState => ({
      ...prevState,
      gen: event.target.value
    }))
  }

  const handleChangeSortBy = (event) => {
    setFilters(prevState => ({
      ...prevState,
      sortBy: event.target.value
    }))
  }

  return (
    <div className='config'>
      <SearchBar
        value={filters.search}
        onChange={handleChangeSearch}
        placeholder='Pikachu, Eevee...'
      />
      <Select
        id='select-type'
        value={filters.type}
        onChange={handleChangeType}
        options={[{ id: 'all', name: 'all' }, ...POKE_TYPES]}
      />
      <Select
        id='select-gen'
        value={filters.gen}
        onChange={handleChangeGen}
        options={[{ id: 'all', name: 'all' }, ...POKE_GENS]}
      />
      <Select
        id='sort-by'
        value={filters.sortBy}
        onChange={handleChangeSortBy}
        options={SORT_BY}
      />
    </div>
  )
}

export default Filters
