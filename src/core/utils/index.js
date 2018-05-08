export const warn = (message) => {
  console.warn(`[vue-element-validate] ${message}`)
}
export const find = (arrayLike, predicate) => {
  const array = Array.isArray(arrayLike) ? arrayLike : toArray(arrayLike)
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i])) {
      return array[i]
    }
  }
  return undefined
}
export const toArray = (arrayLike) => {
  return Array.from(arrayLike)
}
