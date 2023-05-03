export default function toDigits(string, numDigits = 4) {
  return '#' + ('0000000' + string).slice(-numDigits)
}