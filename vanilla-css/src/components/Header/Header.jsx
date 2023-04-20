import './Header.css'
import SearchBar from '../SearchBar/SearchBar'
import Select from '../Select/Select'
import FilterContext from '../../context/FilterContext'
import useSelOptions from '../../hooks/useSelOptions'

export default function Header() {
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
      <FilterContext.Provider value={''}>
        <div className='config'>
          <SearchBar />
          <Select id='select-type' options={opts.type} />
          <Select id='select-gen' options={opts.gen} />
          <Select id='sort-by' options={opts.sort} />
        </div>
      </FilterContext.Provider>
    </div>
  )
}
