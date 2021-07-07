<template>
  <header class="header">
    Header
    <button type="button" v-show="loggedIn">Logout</button>
  </header>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "AppHeader",
  data: () => ({
    loggedIn: false
  })
  // setup() {
  //   const loggedIn = ref(false)
  //   return {
  //     loggedIn
  //   }
  // }
}
</script>
