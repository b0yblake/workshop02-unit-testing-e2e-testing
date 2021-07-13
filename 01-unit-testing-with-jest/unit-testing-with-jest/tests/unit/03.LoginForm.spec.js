import LoginForm from "@/components/LoginForm.vue"
import { mount, shallowMount } from "@vue/test-utils"

/*
We have some conditions to test:
1. Form has the input
2. Can set an input value
3. Simulate form submission
4. Make sure event has been emitted
5. Make sure payload(data emit - not key emit) is correct

OR All. we can simulate all case in (5.) 
*/

describe("LoginForm", () => {
  test("Form has the input", () => {
    const wrapper = shallowMount(LoginForm)
    expect(wrapper.find('input[type="text"]').isVisible()).toBe(true)
  })

  test("Can set an input value", () => {
    const wrapper = shallowMount(LoginForm)
    wrapper.find('input[type="text"]').setValue("Adam")
    expect(wrapper.find('input[type="text"]').element.value).toEqual("Adam")
  })

  test("Simulate form submission", () => {
    const wrapper = shallowMount(LoginForm)
    expect(wrapper.trigger("submit")).toBeTruthy()
  })

  test("Make sure event has been emitted", () => {
    const wrapper = shallowMount(LoginForm)
    wrapper.find('input[type="text"]').setValue("Adam")
    wrapper.trigger("submit")
    expect(wrapper.emitted("name")).toHaveLength(1)
  })

  test("Make sure payload(data emit - not key emit) is correct", () => {
    const wrapper = shallowMount(LoginForm)
    wrapper.find('input[type="text"]').setValue("Adam")
    wrapper.trigger("submit")

    const formSubtmittedCalls = wrapper.emitted("name")
    expect(formSubtmittedCalls).toHaveLength(1)

    // expect(formSubtmittedCalls[0][0]).toMatchObject({ name: 'Adam' })
    expect(formSubtmittedCalls[0][0]).toEqual("Adam")
  })
})
