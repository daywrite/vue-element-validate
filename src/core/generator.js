import { find } from './utils/index'
export default class Generator {
  static generate (el, binding, vnode) {
    return {
      el: el,
      binding: binding,
      vnode: vnode,
      initialValue: Generator.resolveInitialValue(vnode) // 件的默认值
    }
  }

  static resolveModel (binding, vnode) {
    if (binding.arg) {
      return { expression: binding.arg }
    }
    return null
  }

  static resolveInitialValue (vnode) {
    const model = vnode.data.model || find(vnode.data.directives, d => d.name === 'model')
    return model && model.value
  }
}
