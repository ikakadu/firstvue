<template>
  <h4>{{id}} {{ title }}</h4>
  <button @click="$emit('enlarge-text1')">Enlarge text12</button>
</template>

<script>
export default {
  name: "BlogPost"
  ,props: ['title' , 'id']
  // , emits: ['enlarge-text']
}
</script>

<style scoped>

</style>