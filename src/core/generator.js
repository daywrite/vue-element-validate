export default class Generator {
  static generate (el, binding, vnode) {
    return {
      el: el,
      binding: binding,
      vnode: vnode
    }
  }
}
