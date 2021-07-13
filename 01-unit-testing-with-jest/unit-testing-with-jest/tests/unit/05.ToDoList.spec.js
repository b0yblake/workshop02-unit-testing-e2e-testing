import ToDoList from "@/components/ToDoList"
import { mount, shallowMount } from "@vue/test-utils"

/*
We have some condition to test:
1. The todo list render success
2. Adding a new todo working success
3. Mask as completed in input working success
*/

describe("ToDoList", () => {
  test("The todo list render success", () => {
    const wrapper = shallowMount(ToDoList)
    // expect(wrapper.html()).toContain('<li class="item">Doing some new <input type="checkbox"></li>')
    expect(wrapper.get('[data-test="todo"]').text()).toBe('Doing some new')
  })
  test("Adding a new todo working success", async () => {
    const wrapper = shallowMount(ToDoList)

    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(2)

    await wrapper.find('[data-test="new-todo"]').setValue('new todo...')
    await wrapper.find('button').trigger('click')

    // await wrapper.vm.$nextTick()
    expect(wrapper.findAll('[data-test="todo"]')).toHaveLength(3)
  })
  test("Mask as completed in input working success", async () => {
    const wrapper = shallowMount(ToDoList)

    await wrapper.find('[data-test="mask-completed"]').setValue(true)
    expect(wrapper.get('[data-test="todo"]').classes()).toContain('completed')


  })
})
