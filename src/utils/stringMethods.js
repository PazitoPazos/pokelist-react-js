export function capitalizeFirstLetter (string) {
  return string[0].toUpperCase() + string.slice(1)
}

export function capitalizeFirstsLetters (string) {
  return string.replace(/\b\w/g, x => x.toUpperCase())
}

export function removeDashes (string) {
  const posGuion = string.indexOf('-')
  if (posGuion !== -1) string = string.replaceAll('-', ' ')
  return string
}

export function toDigits (string, numDigits = 4) {
  return '#' + ('0000000' + string).slice(-numDigits)
}
