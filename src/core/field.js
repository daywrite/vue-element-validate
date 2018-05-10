import { uniqId, assign, normalizeRules } from './utils/index'
const DEFAULT = {
  initial: false
}
export default class Field {
  id
  rules
  initial
  constructor (options) {
    options = assign({}, DEFAULT, options)
    this.id = uniqId()
    this.rules = {}
    this.update(options)
  }

  get isRequired () {
    return !!this.rules.required
  }

  update (options) {
    this.initial = options.initial || this.initial || false
    this.rules = options.rules !== undefined ? normalizeRules(options.rules) : this.rules
  }

  matches (options) {
    if (!options) {
      return true
    }

    if (options.id) {
      return this.id === options.id
    }

    if (options.name === undefined && options.scope === undefined) {
      return true
    }

    if (options.scope === undefined) {
      return this.name === options.name
    }

    if (options.name === undefined) {
      return this.scope === options.scope
    }

    return options.name === this.name && options.scope === this.scope
  }
}
