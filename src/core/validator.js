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
    this.errors = this._validate()
    return fileld
  }
}
