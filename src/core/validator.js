const validatorResult = (valid, id, errors) => ({ valid, id, errors })
export default class Validator {
  constructor () {
    this.errors = this._validate()
  }

  _validate () {
    return validatorResult(true, 1, [])
  }
}
