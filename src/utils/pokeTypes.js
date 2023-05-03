export const pokeTypes = [
  {
    'id': 1,
    'name': 'normal',
    'icons': {
      'icon_text' : 'icon_text/Normal.png',
      'only_icon' : 'only_icon/Normal.svg',
      'only_text' : 'only_text/Normal.png'
    },
    'double_damage_from': ['fighting'],
    'double_damage_to': [],
    'half_damage_from': [],
    'half_damage_to': ['rock', 'steel'],
    'no_damage_from': ['ghost'],
    'no_damage_to': ['ghost']
  },
  {
    'id': 2,
    'name': 'fighting',
    'icons': {
      'icon_text' : 'icon_text/Fighting.png',
      'only_icon' : 'only_icon/Fighting.svg',
      'only_text' : 'only_text/Fighting.png'
    },
    'double_damage_from': ['flying', 'psychic', 'fairy'],
    'double_damage_to': ['normal', 'rock', 'steel', 'ice', 'dark'],
    'half_damage_from': ['ground', 'bug', 'dark'],
    'half_damage_to': ['flying', 'poison', 'bug', 'psychic', 'fairy'],
    'no_damage_from': [],
    'no_damage_to': ['ghost']
  },
  { 
    'id': 3,
    'name': 'flying',
    'icons': {
      'icon_text' : 'icon_text/Flying.png',
      'only_icon' : 'only_icon/Flying.svg',
      'only_text' : 'only_text/Flying.png'
    },
    'double_damage_from': ['rock', 'electric', 'ice'],
    'double_damage_to': ['fighting', 'bug', 'grass'],
    'half_damage_from': ['fighting', 'bug', 'grass'],
    'half_damage_to': ['rock', 'steel', 'electric'],
    'no_damage_from': ['ground'],
    'no_damage_to': []
  },
  { 
    'id': 4,
    'name': 'poison',
    'icons': {
      'icon_text' : 'icon_text/Poison.png',
      'only_icon' : 'only_icon/Poison.svg',
      'only_text' : 'only_text/Poison.png'
    },
    'double_damage_from': ['ground', 'psychic'],
    'double_damage_to': ['grass', 'fairy'],
    'half_damage_from': ['fighting', 'poison', 'bug', 'grass', 'fairy'],
    'half_damage_to': ['poison', 'ground', 'rock', 'ghost'],
    'no_damage_from': [],
    'no_damage_to': ['steel']
  },
  { 
    'id': 5,
    'name': 'ground',
    'icons': {
      'icon_text' : 'icon_text/Ground.png',
      'only_icon' : 'only_icon/Ground.svg',
      'only_text' : 'only_text/Ground.png'
    },
    'double_damage_from': ['water', 'grass', 'ice'],
    'double_damage_to': ['poison', 'rock', 'steel', 'fire', 'electric'],
    'half_damage_from': ['poison', 'rock'],
    'half_damage_to': ['bug', 'grass'],
    'no_damage_from' : ['electric'],
    'no_damage_to' : ['flying']
  },
  { 
    'id': 6,
    'name': 'rock',
    'icons': {
      'icon_text' : 'icon_text/Rock.png',
      'only_icon' : 'only_icon/Rock.svg',
      'only_text' : 'only_text/Rock.png'
    },
    'double_damage_from': ['fighting', 'ground', 'steel', 'water', 'grass'],
    'double_damage_to': ['flying', 'bug', 'fire', 'ice'],
    'half_damage_from': ['normal', 'flying', 'poison', 'fire'],
    'half_damage_to': ['fighting', 'ground', 'steel'],
    'no_damage_from' : [],
    'no_damage_to' : []
  },
  { 
    'id': 7,
    'name': 'bug',
    'icons': {
      'icon_text' : 'icon_text/Bug.png',
      'only_icon' : 'only_icon/Bug.svg',
      'only_text' : 'only_text/Bug.png'
    },
    'double_damage_from': ['flying', 'rock', 'fire'],
    'double_damage_to': ['grass', 'psychic', 'dark'],
    'half_damage_from': ['fighting', 'ground', 'grass'],
    'half_damage_to': ['fighting', 'flying', 'poison', 'ghost', 'steel', 'fire', 'fairy'],
    'no_damage_from' : [],
    'no_damage_to' : []
  },
  { 
    'id': 8,
    'name': 'ghost',
    'icons': {
      'icon_text' : 'icon_text/Ghost.png',
      'only_icon' : 'only_icon/Ghost.svg',
      'only_text' : 'only_text/Ghost.png'
    },
    'double_damage_from': ['ghost', 'dark'],
    'double_damage_to': ['ghost', 'psychic'],
    'half_damage_from': ['poison', 'bug'],
    'half_damage_to': ['dark'],
    'no_damage_from' : ['normal', 'fighting'],
    'no_damage_to' : ['normal']
  },
  { 
    'id': 9,
    'name': 'steel',
    'icons': {
      'icon_text' : 'icon_text/Steel.png',
      'only_icon' : 'only_icon/Steel.svg',
      'only_text' : 'only_text/Steel.png'
    },
    'double_damage_from': ['figthing', 'ground', 'fire'],
    'double_damage_to': ['rock', 'ice', 'fairy'],
    'half_damage_from' : ['normal', 'flying', 'rock', 'bug','steel', ' grass', 'psychic', 'ice', 'dragon', 'fairy'],
    'half_damage_to' : ['steel', 'fire', 'water', 'electric'],
    'no_damage_from' : ['poison'],
    'no_damage_to' : []
  },
  {
    'id': 10,
    'name': 'fire',
    'icons': {
      'icon_text' : 'icon_text/Fire.png',
      'only_icon' : 'only_icon/Fire.svg',
      'only_text' : 'only_text/Fire.png'
    },
    'double_damage_from': ['ground', 'rock', 'water'],
    'double_damage_to': ['bug', 'steel', 'grass', 'ice'],
    'half_damage_from': ['bug', 'steel', 'fire', 'grass', 'ice', 'fairy'],
    'half_damage_to': ['rock', 'fire', 'water', 'dragon'],
    'no_damage_from': [],
    'no_damage_to': []
  },
  {
    'id': 11, 
    'name': 'water',
    'icons': {
      'icon_text' : 'icon_text/Water.png',
      'only_icon' : 'only_icon/Water.svg',
      'only_text' : 'only_text/Water.png'
    },
    'double_damage_from': ['grass', 'electric'],
    'double_damage_to': ['ground', 'rock', 'fire'],
    'half_damage_from': ['steel', 'fire', 'water', 'ice'],
    'half_damage_to': ['water', 'grass', 'dragon'],
    'no_damage_from': [],
    'no_damage_to': []
  },
  {
    'id': 12, 
    'name': 'grass',
    'icons': {
      'icon_text' : 'icon_text/Grass.png',
      'only_icon' : 'only_icon/Grass.svg',
      'only_text' : 'only_text/Grass.png'
    },
    'double_damage_from': ['flying', 'poison', 'bug', 'fire', 'ice'],
    'double_damage_to': ['ground', 'rock', 'water'],
    'half_damage_from': ['ground', 'water', 'grass', 'electric'],
    'half_damage_to': ['flying', 'poison', 'bug', 'steel', 'fire', 'grass', 'dragon'],
    'no_damage_from': [],
    'no_damage_to': []
  },
  {
    'id': 13, 
    'name': 'electric',
    'icons': {
      'icon_text' : 'icon_text/Electric.png',
      'only_icon' : 'only_icon/Electric.svg',
      'only_text' : 'only_text/Electric.png'
    },
    'double_damage_from': ['ground'],
    'double_damage_to': ['flying', 'water'],
    'half_damage_from': ['flying', 'steel', 'electric'],
    'half_damage_to': ['grass', 'electric', 'dragon'],
    'no_damage_from': [],
    'no_damage_to': ['ground']
  },
  {
    'id': 14, 
    'name': 'psychic',
    'icons': {
      'icon_text' : 'icon_text/Psychic.png',
      'only_icon' : 'only_icon/Psychic.svg',
      'only_text' : 'only_text/Psychic.png'
    },
    'double_damage_from': ['bug', 'ghost', 'dark'],
    'double_damage_to': ['fighting', 'poison'],
    'half_damage_from': ['fighting', 'psychic'],
    'half_damage_to': ['steel', 'psychic'],
    'no_damage_from': [],
    'no_damage_to': ['dark']
  },
  {
    'id': 15, 
    'name': 'ice',
    'icons': {
      'icon_text' : 'icon_text/Ice.png',
      'only_icon' : 'only_icon/Ice.svg',
      'only_text' : 'only_text/Ice.png'
    },
    'double_damage_from': ['fighting', 'rock', 'steel', 'fire'],
    'double_damage_to': ['flying', 'ground', 'grass', 'dragon'],
    'half_damage_from': ['ice'],
    'half_damage_to': ['steel', 'fire', 'water', 'ice'],
    'no_damage_from': [],
    'no_damage_to': []
  },
  {
    'id': 16, 
    'name': 'dragon',
    'icons': {
      'icon_text' : 'icon_text/Dragon.png',
      'only_icon' : 'only_icon/Dragon.svg',
      'only_text' : 'only_text/Dragon.png'
    },
    'double_damage_from': ['ice', 'dragon', 'fairy'],
    'double_damage_to': ['dragon'],
    'half_damage_from': ['fire', 'water', 'grass', 'electric'],
    'half_damage_to': ['steel'],
    'no_damage_from': [],
    'no_damage_to': ['fairy']
  },
  {
    'id': 17, 
    'name': 'dark',
    'icons': {
      'icon_text' : 'icon_text/Dark.png',
      'only_icon' : 'only_icon/Dark.svg',
      'only_text' : 'only_text/Dark.png'
    },
    'double_damage_from': ['fighting', 'bug', 'fairy'],
    'double_damage_to': ['ghost', 'psychic'],
    'half_damage_from': ['ghost', 'dark'],
    'half_damage_to': ['fighting', 'dark', 'fairy'],
    'no_damage_from': ['psychic'],
    'no_damage_to': []
  },
  {
    'id': 18, 
    'name': 'fairy',
    'icons': {
      'icon_text' : 'icon_text/Fairy.png',
      'only_icon' : 'only_icon/Fairy.svg',
      'only_text' : 'only_text/Fairy.png'
    },
    'double_damage_from': ['poison', 'steel'],
    'double_damage_to': ['fighting', 'dragon', 'dark'],
    'half_damage_from': ['fighting', 'bug', 'dark'],
    'half_damage_to': ['poison', 'steel', 'fire'],
    'no_damage_from': ['dragon'],
    'no_damage_to': []
  },
]