import MessageDisplay from "@/components/MessageDisplay"
import { flushPromises, mount, shallowMount } from "@vue/test-utils"
import { getMessage } from "@/services"
import axios from "axios"

// We will mock with Miragejs
// https://github.com/miragejs/examples/blob/master/vue-axios-test-utils/tests/unit/example.spec.js
import { makeServer } from "../../mock/server"

/*
We have some conditions to test:
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
    axios.get = jest.fn()
    jest.mock("axios")
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

  test("When call with axios successfull and the message displayed", async () => {

    const mockMessage = "Hello world"
    // getMessage.mockResolvedValueOnce({ text: mockMessage })
    axios.get.mockResolvedValueOnce({ text: mockMessage })
    const wrapper = mount(MessageDisplay)

    await flushPromises()
    // expect(getMessage).toHaveBeenCalledTimes(1)
    expect(getMessage).toHaveBeenCalledTimes(1)

    console.log('data: ', wrapper.find('[data-message="message"]').element.textContent)
    expect(
      wrapper.find('[data-message="message"]').element.textContent
    ).toEqual(mockMessage)
  })
})
