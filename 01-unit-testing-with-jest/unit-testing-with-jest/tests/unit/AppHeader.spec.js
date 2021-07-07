import AppHeader from '@/components/AppHeader'
import { mount, shallowMount } from '@vue/test-utils'

describe('AppHeader', () => {
  test('If user not logged in: ', () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
  })

  test('If user logged in: ', async () => {
    const wrapper = mount(AppHeader)
    wrapper.setData({ loggedIn: true })

    await wrapper.vm.$nextTick()
    expect(wrapper.find('button').isVisible()).toBe(true)
  })
})