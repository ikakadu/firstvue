<template>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
<!--  <nav>
    <RouterLink to="/hw">Go to HelloWorld</RouterLink>
    <RouterLink to="/jssx">Go to jisuanshuxing</RouterLink>
  </nav>
  <RouterView/>-->

  <div>

    <router-link to="/hw">go to HelloWorld</router-link>
    <br>
    <router-link to="/jssx">go to jisuanshuxing</router-link>
    <br>
    <router-link to="/mbyy">go to 模板引用</router-link>
    <br>
    <router-link to="/tjxr">go to 条件渲染</router-link>
    <br>
    <router-link to="/BaseCom">go to BaseCom</router-link>
    <br>
    <router-view></router-view>
  </div>

  <!--  <div>-->
  <!--    <Jisuanshuxing/>-->
  <!--  </div>-->
  <!--  <div>-->
  <!--    <mbyy/>-->
  <!--  </div>-->
  <!--  <div>-->
  <!--    <tjxr/>-->
  <!--  </div>-->
  <!--  <div>-->
  <!--    <HelloWorld/>-->
  <!--  </div>-->
  <!--  <div>-->
  <!--    <base1/>-->
  <!--  </div>-->

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
// import base1 from './components/BaseCom.vue'
import Jisuanshuxing from './components/JisuanShuxing.vue'
// import tjxr from './components/条件渲染.vue'
// import Sqlite3 from './components/sqlite3.vue'
// import TodoList from './components/TodoList.vue'
// import mbyy from './components/MuBanYinYong.vue'
// import {useRouter} from 'vue-router'
// import { createMemoryHistory, createRouter } from 'vue-router'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // base1,
    // Jianjie,
    // TodoList
    // jisuanshuxing: Jisuanshuxing
    Jisuanshuxing,
    // tjxr
    // ,mbyy
  },
  setup() {


  }

  , methods: {}

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
