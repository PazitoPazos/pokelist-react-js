import './App.css'
import CardList from './components/CardList/CardList'
import Header from './components/Header/Header'
import { useState } from 'react'

function App() {
  const [filterText, setFilterText] = useState('')
  const [filterType, setFilterType] = useState('all')
  const [filterGen, setFilterGen] = useState('all')
  const [sortBy, setSortBy] = useState('sbid')

  return (
    <div className='App'>
      <Header
        filterText={filterText}
        onFilterTextChange={setFilterText}
        filterType={filterType}
        onFilterTypeChange={setFilterType}
        filterGen={filterGen}
        onFilterGenChange={setFilterGen}
        sortBy={sortBy}
        onSortByChange={setSortBy}
      />
      <CardList
        filterText={filterText}
        filterType={filterType}
        filterGen={filterGen}
        sortBy={sortBy}
      />
    </div>
  )
}

export default App
