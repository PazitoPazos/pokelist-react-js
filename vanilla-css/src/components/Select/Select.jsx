import './Select.css'

export default function Select({ value, onChange, id, options }) {
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
      <select value={value} onChange={(e) => onChange(e.target.value)} id={id}>
        {opts}
      </select>
    </div>
  )
}
