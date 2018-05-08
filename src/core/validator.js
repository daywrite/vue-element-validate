const validatorResult = (valid, id, errors) => ({ valid, id, errors })
export default class Validator {
  constructor () {
    // this.errors = this._validate()
    this.errors = []
  }

  _validate () {
    return validatorResult(true, 1, [])
  }

  attach (fileld) {
    const value = fileld.initialValue
    this.errors = validatorResult(true, value, [])
    return fileld
  }
}
