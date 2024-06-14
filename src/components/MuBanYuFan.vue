<template>
  <div>
    <span v-once>这个将不会改变,msg: {{ msg }}</span>
    <br>
    <button @click="revMsg(msg)">改变msg</button>
    <span>msg: {{ msg }}</span>
  </div>

  <div>
    <p v-if="msg">现在你看到我了</p>
  </div>

</template>

<script>
export default {
  name: "MuBanYuFan"
  , data() {
    return {
      msg: true
    }
  }
  , methods: {
    revMsg(val) {
      if (val) {
        this.msg = false;
      } else {
        this.msg = true;
      }
    }
  }
}
</script>

<style scoped>

</style>