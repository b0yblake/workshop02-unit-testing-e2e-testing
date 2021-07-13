import MessageDisplay from "@/components/MessageDisplay"
import { mount, shallowMount, createLocalVue } from "@vue/test-utils"
import { getMessage } from "@/services"
import flushPromises from 'flush-promises'
import axios from "axios"

// We will mock with Miragejs
// https://github.com/miragejs/examples/blob/master/vue-axios-test-utils/tests/unit/example.spec.js
import { makeServer } from "../../mock/server"

/*
We have some conditions to test:
0. onMount vue axios call success
1. When call with axios successfull and the message displayed
2. When call with axios unsuccessfull and the error display
*/




describe("MessageDisplay", () => {
  //Create server Miragejs
  let server
  let originalXMLHttpRequest = XMLHttpRequest

  

  beforeAll(() => {
    server = makeServer()
    // Force node to use the monkey patched window.XMLHttpRequest
    // This needs to come after `makeServer()` is called.
    // eslint-disable-next-line no-global-assign
    XMLHttpRequest = window.XMLHttpRequest

    // jest.mock("@/services")
    // axios.get = jest.fn()
    // jest.mock("axios")

    const fakeMessage = {
      "text": "Hello world"
    }

    jest.mock('axios', () => ({
      get: jest.fn(() => fakeMessage)
    }))

    beforeEach(() => {
      jest.clearAllMocks()
    })
    

  })

  afterAll(() => {
    server.shutdown()
    // Restore node's original window.XMLHttpRequest.
    // eslint-disable-next-line no-global-assign
    XMLHttpRequest = originalXMLHttpRequest
  })

  test("onMount vue axios call success", async () => {

    // const mockFn = jest.fn()

    const wrapper = shallowMount(MessageDisplay)

    const mockMessage = "Hello world"
    axios.get.mockResolvedValueOnce({ text: mockMessage })
    // axios.get.mockResolvedValueOnce({ text: mockMessage })
    

    await flushPromises()
    // expect(getMessage).toHaveBeenCalledTimes(1)
    // expect(mockFn).toBeCalled()
    expect(axios.get).toHaveBeenCalledTimes(1)

    console.log('data: ', wrapper.find('[data-message="message"]').element.textContent)
    expect(
      wrapper.find('[data-message="message"]').element.textContent
    ).toEqual(mockMessage)
  })

  // test("When call with axios successfull and the message displayed", async () => {

  //   const mockFn = jest.fn()
  //   const mockMessage = "Hello world"
  //   mockFn.mockResolvedValueOnce({ text: mockMessage })
  //   // axios.get.mockResolvedValueOnce({ text: mockMessage })
  //   const wrapper = shallowMount(MessageDisplay)

  //   await flushPromises()
  //   // expect(getMessage).toHaveBeenCalledTimes(1)
  //   expect(mockFn).toBeCalled()
  //   expect(getMessage).toHaveBeenCalledTimes(1)

  //   console.log('data: ', wrapper.find('[data-message="message"]').element.textContent)
  //   expect(
  //     wrapper.find('[data-message="message"]').element.textContent
  //   ).toEqual(mockMessage)
  // })
})
