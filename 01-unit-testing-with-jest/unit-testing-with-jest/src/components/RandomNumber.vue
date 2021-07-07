<template>
  <div class="random-number">
    <span>{{ randomNumber }}</span>
    <button type="button" class="btn1" @click="getRandomNumber">Genera Random Number 1</button>
    <button type="button" class="btn2" @click="getRandomNumber">Genera Random Number 2</button>
  </div>
</template>

<script>
export default {
  name: "RandomNumber",
  props: {
    min: {
      type: Number,
      default: 1,
    },
    max: {
      type: Number,
      default: 10,
    }
  },
  data: () => ({
    randomNumber: 0,
  }),
  setup(props, context) {
    const getRandomNumber = () => randomNumber = Math.floor(Math.random() * (props.max - props.min + 1)) + props.min;
    return {
      getRandomNumber
    }
  }
}
</script>
