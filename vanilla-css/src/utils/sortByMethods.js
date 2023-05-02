export function sortById(a, b) {
    return a.id > b.id ? 1 : b.id > a.id ? -1 : 0
  }

export function sortByAz(a, b) {
    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0
  }