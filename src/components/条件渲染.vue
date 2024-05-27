<template>
  <button @click="awesome = !awesome">Toggle</button>
  <h1 v-if="awesome">Vue is awesome</h1>
  <h1 v-else>Oh no 😢</h1>
</template>

<script>
export default {
  name: "条件渲染",
  data() {
    return {
    awesome:false

    }
  }
}
</script>

<style scoped>

</style>