<template>
  <div class="todo-list">
    {{ todo }}
    <ul>
      <li
        :class="['item', {completed: item.completed === true}]"
        data-test="todo"
        v-for="(item, index) in todo"
        :key="index"
      >
        {{ item.task }}
        <input type="checkbox" data-test="mask-completed" v-model="item.completed" />
      </li>
    </ul>
    <div class="todo-action">
      <input type="input" data-test="new-todo" class="input-new" v-model="newTextTodo" />
      <button type="button" @click="newToDo">New Todo</button>
    </div>
  </div>
</template>
<script>
import {
  ref,
  reactive,
  toRefs,
  unref,
} from 'vue'
export default {
  name: "ToDoList",
  setup() {
    const newTextTodo = ref('')
    const list = reactive({
      todo: [
        {
          id: 1,
          task: "Doing some new",
          completed: false
        },
        {
          id: 2,
          task: "Will finish this todo",
          completed: false
        }
      ]
    })
    const newToDo = () => {
      list.todo.push({
        id: list.todo.length+1,
        task: unref(newTextTodo),
        completed: false
      })
    }
    return {
      ...toRefs(list),
      newToDo,
      newTextTodo,
    }
  }
}
</script>
