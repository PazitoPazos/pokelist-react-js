import './Header.css'
import SearchBar from '../SearchBar/SearchBar'
import Select from '../Select/Select'
import useSelOptions from '../../hooks/useSelOptions'

export default function Header({
  filterText,
  onFilterTextChange,
  filterType,
  onFilterTypeChange,
  filterGen,
  onFilterGenChange,
  sortBy,
  onSortByChange,
}) {
  const opts = useSelOptions()

  return (
    <div className='Header'>
      <div className='main-title'>
        <h1 className='title'>
          <a className='is-active' href='#'>
            PokéList
          </a>
          <span className='separator'> | </span>
          <a href='#'>TypeChart</a>
        </h1>
      </div>
      <div className='config'>
        <SearchBar
          value={filterText}
          onChange={onFilterTextChange}
          placeholder='Search...'
        />
        <Select
          id='select-type'
          value={filterType}
          onChange={onFilterTypeChange}
          options={opts.type}
        />
        <Select
          id='select-gen'
          value={filterGen}
          onChange={onFilterGenChange}
          options={opts.gen}
        />
        <Select
          id='sort-by'
          value={sortBy}
          onChange={onSortByChange}
          options={opts.sort}
        />
      </div>
    </div>
  )
}
