import capitalize from "./capitalize"

export function normalizeName(name) { 
  const posGuion = name.indexOf('-')
  if (posGuion !== -1) name = name.replaceAll('-', ' ')
  return capitalize(name)
}