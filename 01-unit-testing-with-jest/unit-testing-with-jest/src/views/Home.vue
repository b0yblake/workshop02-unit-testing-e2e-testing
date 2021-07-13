<template>
  <div class="home">
    <AppHeader />

    ===============

    <RandomNumber />

    ================

    <MessageDisplay />

    ================

    <ToDoList />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue"
import RandomNumber from "@/components/RandomNumber.vue"
import MessageDisplay from "@/components/MessageDisplay.vue"
import ToDoList from "@/components/ToDoList.vue"

export default {
  name: "Home",
  components: {
    AppHeader,
    RandomNumber,
    MessageDisplay,
    ToDoList,
  },
}
</script>
