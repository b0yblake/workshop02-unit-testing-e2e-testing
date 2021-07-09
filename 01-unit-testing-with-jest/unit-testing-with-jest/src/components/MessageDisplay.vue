<template>
  <div class="message__wrap">
    <strong v-if="error" class="error" data-message="error">{{ error }}</strong>
    <strong v-else class="message" data-message="message">{{
      message?.[0]?.text
    }}</strong>
  </div>
</template>

<script>
import { onMounted, reactive, toRefs } from "vue"
import { getMessage } from "@/services"

export default {
  name: "MessageDisplay",
  setup() {
    const responseMessage = reactive({
      message: "",
      error: false,
    })

    onMounted(async () => {
      try {
        const res = await getMessage()
        responseMessage.message = res.data
      } catch (err) {
        responseMessage.error = `Something went wrong: ${err}`
      }
    })

    return {
      ...toRefs(responseMessage),
    }
  },
}
</script>
