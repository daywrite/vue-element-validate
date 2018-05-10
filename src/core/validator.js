import Field from './field'
import FieldBag from './fieldBag'
import { isNullOrUndefined } from './utils/index'

const validatorResult = (valid, id, errors) => ({ valid, id, errors })

export default class Validator {
  errors
  fields
  constructor () {
    this.errors = []
    this.fields = new FieldBag()
  }

  attach (field) {
    const value = field.initialValue

    if (!(field instanceof Field)) {
      field = new Field(field)
    }

    this.fields.push(field)

    if (field.initial) {
      this.validate(`#${field.id}`, value || field.value)
    }
    return field
  }

  async validate (name, value, scope, silent) {
    if (this.paused) return Promise.resolve(true)

    if (arguments.length === 0) {
      return this.validateScopes()
    }
    const field = this._resolveField(name, scope)
    const result = await this._validate(field, value)

    return result.valid
  }
  async validateScopes (silent) {
    if (this.paused) return true

    const results = await Promise.all(
      this.fields.map(field => this._validate(field, field.value))
    )

    return results.every(t => t.valid)
  }
  async _validate (field, value) {
    if (!field.isRequired && (isNullOrUndefined(value) || value === '')) {
      this.errors = validatorResult(true, field.id, [])
      return validatorResult(true, field.id, [])
    }
    Object.keys(field.rules).some(rule => {
      console.log(rule)
    })
    this.errors = validatorResult(true, 100, [])
    return validatorResult(true, 100, [])
  }

  _resolveField (name, scope) {
    if (name[0] === '#') {
      return this.fields.find({ id: name.slice(1) })
    }
    return this.fields.find({ name, scope: null })
  }
}
