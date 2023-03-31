import { useState } from 'react'
import './SearchBar.css'

export default function SearchBar() {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className='config-item'>
      <div className='search-bar-wrap'>
        <input
          type='text'
          name='search-bar'
          id='search-bar'
          placeholder='Search'
          value={text}
          onChange={handleChange}
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.75}
          stroke='currentColor'
          className='search-icon'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
      </div>
    </div>
  )
}
