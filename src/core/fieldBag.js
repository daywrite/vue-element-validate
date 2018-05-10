import Field from './field'
import { find, createError } from './utils/index'
export default class FieldBag {
  items

  constructor () {
    this.items = []
  }
  get count () {
    return this.items.length
  }

  find (matcher) {
    return find(this.items, item => item.matches(matcher))
  }

  push (item) {
    if (!(item instanceof Field)) {
      throw createError('FieldBag only accepts instances of Field that has an id defined.')
    }

    if (!item.id) {
      throw createError('Field id must be defined.')
    }

    if (this.find({ id: item.id })) {
      throw createError(`Field with id ${item.id} is already added.`)
    }

    this.items.push(item)
  }
}
