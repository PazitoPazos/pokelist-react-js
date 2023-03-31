import SearchBar from '../../components/SearchBar/SearchBar'
import Select from '../../components/Select/Select'
import './Header.css'

export default function Header() {
  const TYPES = [{ value: '', desc: '-- Select Type --' }]
  const GENS = [{ value: '', desc: '-- Select Gen --' }]
  const SORTS = [{ value: '', desc: '-- Sort By --' }]

  return (
    <div className='Header'>
      <div className='main-title'>
        <h1 className='title'>
          <a className='is-active' href='#'>
            PokeList
          </a>
          <span className='separator'> | </span>
          <a href='#'>TypeChart</a>
        </h1>
      </div>
      <div className='config'>
          <Select name='select-type' id='select-type' options={TYPES} />
          <Select name='select-gen' id='select-gen' options={GENS} />
          <Select name='sort-by' id='sort-by' options={SORTS} />
          <SearchBar />
      </div>
    </div>
  )
}
