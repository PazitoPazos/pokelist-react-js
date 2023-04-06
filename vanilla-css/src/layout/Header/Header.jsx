import { useEffect, useState } from 'react'
import SearchBar from '../../components/SearchBar/SearchBar'
import Select from '../../components/Select/Select'
import {
  getData,
  getPokeTypes,
  getPokeGens,
} from '../../services/getPokeApiData'
import './Header.css'

export default function Header() {
  const [type, setType] = useState([])
  const [gen, setGen] = useState([])
  const [sort, setSort] = useState([])
  const all_types = [{ value: '', desc: 'All Types' }]
  const all_gens = [{ value: '', desc: 'All Generations' }]
  const sort_ph = [{ value: '', desc: 'Sort By Id' }]

  const typesOptions = all_types.concat(
    type.slice(0, -2).map((t) => {
      const type_id = t.id
      const eng_name = t.names[t.names.length - 3].name

      return { value: type_id, desc: eng_name }
    })
  )

  const genOptions = all_gens.concat(
    gen.map((g) => {
      const gen_id = g.id
      const eng_name = g.names[g.names.length - 2].name

      return { value: gen_id, desc: eng_name }
    })
  )

  useEffect(() => {
    getPokeTypes().then(async (types) => {
      const resTypes = types.map(async (t) => {
        return getData(t.url).then((t) => t)
      })

      const results = await Promise.all(resTypes)
      setType(results)
    })

    getPokeGens().then(async (gens) => {
      const resGens = gens.map(async (g) => {
        return getData(g.url).then((g) => g)
      })

      const results = await Promise.all(resGens)
      setGen(results)
    })
  }, [])

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
        <Select id='select-type' options={typesOptions} />
        <Select id='select-gen' options={genOptions} />
        <Select id='sort-by' options={sort_ph} />
        <SearchBar />
      </div>
    </div>
  )
}
