import Generator from './core/generator'
export default {
  bind (el, binding, vnode) {
    const validator = vnode.context.$validator
    if (!validator) {
      return false
    }

    const fieldOptions = Generator.generate(el, binding, vnode)
    validator.attach(fieldOptions)
  }
}
