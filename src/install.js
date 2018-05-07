import { warn } from './core/utils/index'
import mixin from './mixin'
let Vue
function install (_Vue, options = {}) {
  if (Vue && _Vue === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      warn('already installed, Vue.use(VueElementValidate) should only be called once.')
    }
  }
  Vue = _Vue

  Vue.mixin(mixin)
  Vue.directive('hello', {
    bind: function (el, binding, vnode) {
      el.value = 'hello'
    }
  })
}
export default install
