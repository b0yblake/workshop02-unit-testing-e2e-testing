import AppHeader from "@/components/AppHeader"
import { mount, shallowMount } from "@vue/test-utils"

/*
We have some condition to test:
1. If loggedIn state = false => button not show
1. If loggedIn state = true => button show
*/

describe("AppHeader", () => {
  test("If user not logged in: ", () => {
    const wrapper = mount(AppHeader)
    expect(wrapper.find("button").isVisible()).toBe(false)
  })

  test("If user logged in: ", async () => {
    const wrapper = mount(AppHeader)
    await wrapper.setData({ loggedIn: true })
    // wrapper.findComponent({ ref: 'loggedIn' }).setValue(true)

    // We need use async to wait the wrapper set the state loggedIn
    await wrapper.vm.$nextTick()
    expect(wrapper.find("button").isVisible()).toBe(true)
  })
})
