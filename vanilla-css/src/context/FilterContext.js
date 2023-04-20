import React from 'react'

const FilterContext = React.createContext({
  search: '',
  type: 0,
  gen: 0,
  sort: 'sbid',
})

export default FilterContext