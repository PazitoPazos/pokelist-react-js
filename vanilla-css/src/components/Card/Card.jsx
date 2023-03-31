import './Card.css'
import ArrowMore from '../../components/ArrowMore/ArrowMore'

export function PkImage({ url, alt = '' }) {

  return (
    <div className='pk-image'>
      <img
        src={url}
        alt={alt}
      />
    </div>
  )
}

export function PkInfo({ id, name }) {
  return (
    <div className='pk-info'>
      <div className='pk-id'>{id}</div>
      <div className='pk-name'>{name}</div>
    </div>
  )
}

export function PkTypes({ ftype, stype }) {
  return (
    <div className='pk-types'>
      <div className='pk-type'>{ftype}</div>
      <div className='pk-type'>{stype}</div>
    </div>
  )
}

export function PkVs({ vsStrongTypes, vsWeakTypes }) {
  return (
    <div className='vs' id='more-info'>
      <div className='strong-vs'>
        <div className='title-vs'>Strong VS</div>
        <div className='icon-vs'>{vsStrongTypes}</div>
      </div>
      <div className='weak-vs'>
        <div className='title-vs'>Weak VS</div>
        <div className='icon-vs'>{vsWeakTypes}</div>
      </div>
    </div>
  )
}

export default function Card({ url }) {
  const ID = '#0000'
  const NAME = 'Name'
  const FTYPE = 'Type 1'
  const STYPE = 'Type 2'
  return (
    <div className='Card'>
      <PkImage url={url} />
      <div className='pk-desc'>
        <PkInfo id={ID} name={NAME} />
        <PkTypes ftype={FTYPE} stype={STYPE} />
        <div className='vs'>
          <div className='strong-vs'>
            <div className='title-vs'>Strong VS</div>
            <div className='icon-vs'>
              <img
                src={url}
                alt=''
                className='icon-vs'
              />
              <img
                src={url}
                alt=''
                className='icon-vs'
              />
              <img
                src={url}
                alt=''
                className='icon-vs'
              />
              <img
                src={url}
                alt=''
                className='icon-vs'
              />
            </div>
          </div>
          <div className='weak-vs'>
            <div className='title-vs'>Weak VS</div>
            <div className='icon-vs'>
              <img
                src={url}
                alt=''
                className='icon-vs'
              />
              <img
                src={url}
                alt=''
                className='icon-vs'
              />
              <img
                src={url}
                alt=''
                className='icon-vs'
              />
              <img
                src={url}
                alt=''
                className='icon-vs'
              />
              <img
                src={url}
                alt=''
                className='icon-vs'
              />
            </div>
          </div>
        </div>
      </div>
      <ArrowMore />
    </div>
  )
}
