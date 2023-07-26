import './Card.css'
import ArrowMore from '../../components/ArrowMore/ArrowMore'
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
      {stype === ''
        ? (
          <></>
        )
        : (
          <div className='pk-type'>
            <img src={stype} alt='Icon Type' />
          </div>
        )}
    </div>
  )
}

export function PkVs ({ vsStrongTypes, vsWeakTypes }) {
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

export default function Card ({ measureRef, pkData }) {
  const unknownSprite =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Icon-round-Question_mark.svg/480px-Icon-round-Question_mark.svg.png'
  const sprite =
    pkData.sprites.other['official-artwork'].front_default ||
    unknownSprite
  const pokeId = toDigits(pkData.id)
  const pokeName = capitalizeFirstLetter(pkData.name)

  const firstType = pkData.types[0].type.name
  let secondType = null

  if (pkData.types.length === 2) {
    secondType = pkData.types[1].type.name
  }

  // const fsTypeVs = pokeTypes.filter((type) => type.name === firstType)
  // const fsTypeWeakVs = fsTypeVs.map((type) => {
  //   const concatArr = type.double_damage_from
  //     .concat(type.half_damage_to)
  //     .concat(type.no_damage_to)
  //   const result = concatArr.filter(
  //     (item, idx) => concatArr.indexOf(item) === idx
  //   )

  //   return result
  // })
  // const fsTypeStrongVs = fsTypeVs.map((type) => {
  //   const concatArr = type.double_damage_to
  //     .concat(type.half_damage_from)
  //     .concat(type.no_damage_from)
  //   const result = concatArr.filter(
  //     (item, idx) => concatArr.indexOf(item) === idx
  //   )

  //   return result
  // })

  return (
    <div className='Card' ref={measureRef}>
      <PkImage url={sprite} />
      <div className='pk-desc'>
        <PkInfo id={pokeId} name={pokeName} />
        <PkTypes
          ftype={iconTypes[firstType]}
          stype={secondType ? iconTypes[secondType] : ''}
        />
        <div className='vs'>
          <div className='strong-vs'>
            <div className='title-vs'>Strong VS</div>
            <div className='icon-vs'>
              {/* {fsTypeStrongVs[0].map((type, idx) => {
                return (
                  <img
                    key={idx}
                    src={icon_types[type]}
                    alt='Icon Type'
                    className='icon-vs'
                  />
                )
              })} */}
            </div>
          </div>
          <div className='weak-vs'>
            <div className='title-vs'>Weak VS</div>
            <div className='icon-vs'>
              {/* {fsTypeWeakVs[0].map((type, idx) => {
                return (
                  <img
                    key={idx}
                    src={icon_types[type]}
                    alt='Icon Type'
                    className='icon-vs'
                  />
                )
              })} */}
            </div>
          </div>
        </div>
      </div>
      <ArrowMore />
    </div>
  )
}
