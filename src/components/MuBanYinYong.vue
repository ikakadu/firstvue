<script>
export default {
  data() {
    return {
      list: [1, 2, 3]
    }
  },
  mounted() {
    console.log(this.$refs.items)
  }
}
</script>

<template>
  <ul>
    <li v-for="item in list" ref="items2" :key="item">
      {{ item }}
    </li>
  </ul>
</template>

<!--
<template>

</template>

<script>
export default {
  name: "MuBanYinYong"
}
</script>

<style scoped>

</style>-->
<!--
<script>
export default {
  mounted() {
    this.$refs.input.focus()
  }
}
</script>

<template>
  <input ref="input"/>
</template>-->
