import { shallow, createLocalVue } from '@vue/test-utils'
import vueElementValidate from '../../src/index'
import index from '../integration/components/index.vue'
const Vue = createLocalVue()
Vue.use(vueElementValidate)

test('v-hello', async () => {
  const wrapper = shallow(index, { localVue: Vue })
  const input = wrapper.vm.$el.querySelector('input')

  // await flushPromises()

  expect(wrapper.vm.count).toEqual(0)
  expect(input.value).toEqual('hello')
})