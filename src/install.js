import { warn } from './core/utils/index'
import mixin from './mixin'
import directive from './directive'
let Vue
function install (_Vue, options = {}) {
  if (Vue && _Vue === Vue) {
    if (process.env.NODE_ENV !== 'production') {
      warn('already installed, Vue.use(VueElementValidate) should only be called once.')
    }
  }
  Vue = _Vue

  Vue.mixin(mixin)
  Vue.directive('validate', directive)
  Vue.directive('hello', {
    bind: function (el, binding, vnode) {
      el.value = 'hello'
    }
  })
}
export default install
