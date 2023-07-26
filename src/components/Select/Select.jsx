import './Select.css'
import { capitalizeFirstsLetters, removeDashes } from '../../utils/stringMethods'

export default function Select ({ value, onChange, id, options }) {
  const opts = options.map((opt) => (
    <option
      key={opt.id}
      value={opt.id}
    >
      {capitalizeFirstsLetters(removeDashes(opt.name))}
    </option>
  ))
  return (
    <div className='config-item'>
      <select value={value} onChange={onChange} id={id}>
        {opts}
      </select>
    </div>
  )
}
