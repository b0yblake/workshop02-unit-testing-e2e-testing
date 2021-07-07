import LoginForm from '@/components/LoginForm.vue'
import { mount, shallowMount } from '@vue/test-utils'

/*
We have some conditions to test:
1. Form has the input
2. Can set an input value
3. Simulate form submission
4. Make sure event has been emitted
5. Make sure payload(data emit - not key emit) is correct
*/

describe('LoginForm', () => {
  test('Form has the input', () => {
    const wrapper = mount(LoginForm)
    expect(wrapper.find('input[type="text"]').isVisible()).toBe(true)
  })

  test('Can set an input value', () => {
    const wrapper = mount(LoginForm)
    wrapper.find('input[type="text"]').setValue('Adam')
    expect(wrapper.find('input[type="text"]').element.value).toEqual('Adam')
  })

  // test('Simulate form submission', () => {
  //   const wrapper = mount(LoginForm)
  //   wrapper.trigger('submit')
  // })

  test('Make sure event has been emitted', () => {
    const wrapper = mount(LoginForm)
    wrapper.find('input[type="text"]').setValue('Adam')
    wrapper.trigger('submit')
    expect(wrapper.emitted('name')).toHaveLength(1)
  })

  // test('Make sure payload(data emit - not key emit) is correct', () => {
  //   const wrapper = mount(LoginForm)
  //   wrapper.find('input[type="text"]').setValue('Adam')
  //   wrapper.trigger('submit')
  //   expect(wrapper.emitted('name')).toHaveLength(1)

  //   expect(wrapper.emitted('name')).toEqual('Adam')
  // })
})