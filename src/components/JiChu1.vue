<template>
  <div id="counter">
    Counter: {{ counter }}
  </div>
</template>

<script>
export default {
  name: "JiChu1"
}

const Counter = {
  data() {
    return {
      counter: 0
    }
  }
}


Vue.createApp(Counter).mount('#counter')
</script>

<style scoped>

</style>