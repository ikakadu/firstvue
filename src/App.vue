<template>
  <div>
    <tjxr/>
  </div>
<!--  <div>-->
<!--    <HelloWorld/>-->
<!--  </div>-->
  <div>
    <base1/>
  </div>

<!--  <img alt="Vue logo" src="./assets/logo1.png">-->
  <!--
    <div>
      <Jianjie />
    </div>-->

<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->
</template>

<script>


// import HelloWorld from './components/HelloWorld.vue'
// import Jianjie from './components/Jianjie.vue'
import base1 from './components/BaseCom.vue'
// import Jisuanshuxing from './components/JisuanShuxing.vue'
import tjxr from './components/条件渲染.vue'
// import Sqlite3 from './components/sqlite3.vue'
// import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    base1,
    // Jianjie,
    // TodoList
    // jisuanshuxing: Jisuanshuxing
    // Jisuanshuxing,
    tjxr
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
