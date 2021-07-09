<template>
  <header class="header">
    Header
    <button type="button" v-show="loggedIn">Logout</button>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data: () => ({
    loggedIn: false,
  }),
  // setup() {
  //   const loggedIn = ref(false)
  //   return {
  //     loggedIn
  //   }
  // }
}
</script>
