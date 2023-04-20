import './Select.css'

export default function Select({ id, options }) {
  const opts = options.map((opt) => (
    <option
      key={opt.value}
      value={opt.value}
    >
      {opt.desc}
    </option>
  ))
  return (
    <div className='config-item'>
      <select id={id}>
        {opts}
      </select>
    </div>
  )
}
