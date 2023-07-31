import './Card.css'
import { iconTypes } from '../../utils/iconTypes'
import { capitalizeFirstLetter, toDigits } from '../../utils/stringMethods'

export function PkImage ({ url, alt = '' }) {
  return (
    <div className='pk-image'>
      <img loading="lazy" decoding="async" src={url} alt={alt} />
    </div>
  )
}

export function PkInfo ({ id, name }) {
  return (
    <div className='pk-info'>
      <div className='pk-id'>{id}</div>
      <div className='pk-name'>{name}</div>
    </div>
  )
}

export function PkTypes ({ ftype, stype }) {
  return (
    <div className='pk-types'>
      <div className='pk-type'>
        <img src={ftype} alt='Icon Type' />
      </div>
      {stype &&
        (
          <div className='pk-type'>
            <img src={stype} alt='Icon Type' />
          </div>
        )}
    </div>
  )
}

export default function Card ({ measureRef, pkData }) {
  const unknownSprite =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/480px-Icon-round-Question_mark.svg.png'
  const sprite =
    pkData.sprites.other['official-artwork'].front_default ||
    unknownSprite

  const pokeId = toDigits(pkData.id)
  const pokeName = capitalizeFirstLetter(pkData.name)

  const firstType = pkData?.types[0]?.type?.name
  const secondType = pkData?.types[1]?.type?.name || null

  return (
    <div className='Card' ref={measureRef}>
      <PkImage url={sprite} alt={pokeName + ' sprite'} />
      <div className='pk-desc'>
        <PkInfo id={pokeId} name={pokeName} />
        <PkTypes
          ftype={iconTypes[firstType]}
          stype={secondType && iconTypes[secondType]}
        />
      </div>
    </div>
  )
}
