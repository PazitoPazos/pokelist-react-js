import Filters from '../Filters/Filters'
import './Header.css'
export default function Header () {
  return (
    <div className='Header'>
      <div className='main-title'>
        <h1 className='title'>
          <a className='is-active' href='/'>
            PokéList
          </a>
        </h1>
      </div>
      <Filters />
    </div>
  )
}
