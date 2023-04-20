import { useState, useEffect } from "react"
import capitalize from '../utils/capitalize'
import { pokeGens } from '../utils/pokeGens'
import { pokeTypes } from '../utils/pokeTypes'

export function useSelOptions() { 
  const [type, setType] = useState([])
  const [gen, setGen] = useState([])
  const [sort, setSort] = useState([])

  useEffect(() => {
    const all_types = [{ value: '0', desc: 'All Types' }]
    const all_gens = [{ value: '0', desc: 'All Regions' }]
    const sort_by = [
      { value: 'sbid', desc: 'Sort By Id' },
      { value: 'sbaz', desc: 'Sort By A-Z' },
    ]

    setSort(sort_by)

    const types = pokeTypes.map((t) => {
      return { value: t.id, desc: capitalize(t.name) }
    })
    setType(all_types.concat(types))

    const gens = pokeGens.map((p) => {
      const range =
        ' (' +
        (parseInt(p.offset) + 1) +
        '-' +
        (parseInt(p.offset) + parseInt(p.limit)) +
        ')'

      return {
        value: p.id,
        desc: p.name + range,
      }
    })
    setGen(all_gens.concat(gens))
  }, [])

  return {type: type, gen: gen, sort: sort}
}

export default useSelOptions