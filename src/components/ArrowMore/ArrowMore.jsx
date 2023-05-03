import './ArrowMore.css'

export default function ArrowMore() {
  const handleClick = (e) => {
    let el = e.target
    if (e.target.tagName === 'path') {
      el = el.parentNode
    }

    const DESC = el.parentNode.previousElementSibling
    const MORE = DESC.lastElementChild

    el.classList.toggle('is-open')
    DESC.classList.toggle('is-expanded')
    MORE.classList.toggle('is-expanded')
  }

  return (
    <div className='arrow-more'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={3}
        stroke='currentColor'
        className='arrow'
        onClick={handleClick}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M19.5 8.25l-7.5 7.5-7.5-7.5'
        />
      </svg>
    </div>
  )
}
