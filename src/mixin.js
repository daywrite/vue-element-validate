import Validator from './core/validator'
export default {
  provide () {
    if (this.$validator) {
      return {
        $validator: this.$validator
      }
    }
    return {}
  },
  beforeCreate () {
    this.$validator = new Validator()
  }
}
