<template>
  <form @submit.prevent="onSubmit" class="form">
    <input type="text" v-model="name" />
    <button type="submit">Submit</button>
  </form>
</template>
<script>
import {ref} from 'vue'
export default {
  name: "LoginForm",
  emits: ['name'],
  setup(props, context) {
    const name = ref(null)
    const onSubmit = () => {
      context.emit('name',name)
    }
    return {
      onSubmit,
      name
    }
  }
}
</script>
