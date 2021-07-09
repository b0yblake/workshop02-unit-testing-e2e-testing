import RandomNumber from "@/components/RandomNumber.vue"
import { mount, shallowMount } from "@vue/test-utils"

/*
We have some condition to test:
1. At initial, randomNumber should display 0
2. When clicked button, randomNumber should change and in range: 1 < randomNumber <= 10
3. When clicked button 2, randomNumbershould change and in range: 100 < randomNumber <= 200
*/

describe("RandomNumber", () => {
  test("At initial, randomNumber should display 0", () => {
    const wrapper = mount(RandomNumber)
    expect(wrapper.html()).toContain("<span>0</span>")
  })

  test("When clicked button, randomNumber should change and in range: 1 < randomNumber <= 10", async () => {
    const wrapper = mount(RandomNumber)
    wrapper.find(".btn1").trigger("click")

    // We need use async to wait the wrapper click button
    await wrapper.vm.$nextTick()
    const num = parseInt(wrapper.find("span").element.textContent)
    expect(num).toBeGreaterThan(1)
    expect(num).toBeLessThanOrEqual(10)
  })

  test("When clicked button 2, randomNumbershould change and in range: 100 < randomNumber <= 200", async () => {
    const wrapper = mount(RandomNumber, {
      propsData: {
        min: 100,
        max: 200,
      },
    })
    wrapper.find(".btn2").trigger("click")

    // We need use async to wait the wrapper click button
    await wrapper.vm.$nextTick()
    const num = parseInt(wrapper.find("span").element.textContent)
    expect(num).toBeGreaterThan(100)
    expect(num).toBeLessThanOrEqual(200)
  })
})
