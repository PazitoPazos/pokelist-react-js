import './Card.css'
import ArrowMore from '../../components/ArrowMore/ArrowMore'

export function PkImage({ url, alt = '' }) {
  return (
    <div className='pk-image'>
      <img src={url} alt={alt} />
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
      <div className='pk-type'>
        <img src={ftype} alt='Icon Type' />
      </div>
      {stype === '' ? (
        <></>
      ) : (
        <div className='pk-type'>
          <img src={stype} alt='Icon Type' />
        </div>
      )}
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

export default function Card({ pkData }) {
  const TYPES = {
    normal:
      'https://static.wikia.nocookie.net/pyruslords/images/1/1d/Normal_Type.png',
    fighting:
      'https://static.wikia.nocookie.net/pyruslords/images/c/ce/Fighting_Type.png',
    flying:
      'https://static.wikia.nocookie.net/pyruslords/images/e/ec/Flying_Type.png',
    poison:
      'https://static.wikia.nocookie.net/pyruslords/images/a/ad/Poison_Type.png',
    ground:
      'https://static.wikia.nocookie.net/pyruslords/images/c/c4/Ground_Type.png',
    rock: 'https://static.wikia.nocookie.net/pyruslords/images/6/69/Rock_Type.png',
    bug: 'https://static.wikia.nocookie.net/pyruslords/images/0/0b/Bug_Type.png',
    ghost:
      'https://static.wikia.nocookie.net/pyruslords/images/d/d3/Ghost_Type.png',
    steel:
      'https://static.wikia.nocookie.net/pyruslords/images/5/5f/Steel_Type.png',
    fire: 'https://static.wikia.nocookie.net/pyruslords/images/0/0a/Fire_Type.png',
    water:
      'https://static.wikia.nocookie.net/pyruslords/images/2/25/Water_Type.png',
    grass:
      'https://static.wikia.nocookie.net/pyruslords/images/f/f8/Grass_Type.png',
    electric:
      'https://static.wikia.nocookie.net/pyruslords/images/6/6f/Electric_Type.png',
    psychic:
      'https://static.wikia.nocookie.net/pyruslords/images/0/00/Psychic_Type.png',
    ice: 'https://static.wikia.nocookie.net/pyruslords/images/5/50/Ice_Type.png',
    dragon:
      'https://static.wikia.nocookie.net/pyruslords/images/2/24/Dragon_Type.png',
    dark: 'https://static.wikia.nocookie.net/pyruslords/images/5/51/Dark_Type.png',
    fairy:
      'https://static.wikia.nocookie.net/pyruslords/images/0/01/Fairy_Type.png',
  }

  // console.log(TYPES['normal'])

  const SPRITE = pkData['sprites']['other']['official-artwork']['front_default']
  const ID = '#' + ('000' + pkData['id']).slice(-4) // TODO Convert 4-Digits format to function
  const NAME = pkData['name'][0].toUpperCase() + pkData['name'].slice(1) // TODO Convert capitalize first letter to function

  const FTYPE = pkData['types'][0]['type']['name']
  let STYPE = null

  if (pkData.types.length == 2) {
    STYPE = pkData['types'][1]['type']['name']
  }

  return (
    <div className='Card'>
      <PkImage url={SPRITE} />
      <div className='pk-desc'>
        <PkInfo id={ID} name={NAME} />
        <PkTypes ftype={TYPES[FTYPE]} stype={STYPE ? TYPES[STYPE] : ''} />
        <div className='vs'>
          <div className='strong-vs'>
            <div className='title-vs'>Strong VS</div>
            <div className='icon-vs'>
              <img src={''} alt='' className='icon-vs' />
              <img src={''} alt='' className='icon-vs' />
              <img src={''} alt='' className='icon-vs' />
              <img src={''} alt='' className='icon-vs' />
            </div>
          </div>
          <div className='weak-vs'>
            <div className='title-vs'>Weak VS</div>
            <div className='icon-vs'>
              <img src={''} alt='' className='icon-vs' />
              <img src={''} alt='' className='icon-vs' />
              <img src={''} alt='' className='icon-vs' />
              <img src={''} alt='' className='icon-vs' />
              <img src={''} alt='' className='icon-vs' />
            </div>
          </div>
        </div>
      </div>
      <ArrowMore />
    </div>
  )
}
