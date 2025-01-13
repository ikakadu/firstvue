<template>
<!--App作为根组件，会被植入到其他所有组件，或者说其他组件都有继承根组件的内容-->
  <router-link to="home">首页</router-link>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
    <strong>Current route name:</strong> {{ $route.name }}
  </p>
<!--  <nav>
    <RouterLink to="/hw">Go to HelloWorld</RouterLink>
    <RouterLink to="/jssx">Go to jisuanshuxing</RouterLink>
  </nav>
  <RouterView/>-->

  <div id="app">
    <RouterView />
  </div>

<!--  <div>

    <router-link to="/hw">go to HelloWorld</router-link>
    <br>
    <router-link to="/jssx">go to jisuanshuxing</router-link>
    <br>
    <router-link to="/mbyy">go to 模板引用</router-link>
    <br>
    <router-link to="/mbyf">go to 模板语法</router-link>
    <br>
    <router-link to="/tjxr">go to 条件渲染</router-link>
    <br>
    <router-link to="/BaseCom">go to BaseCom</router-link>
    <br>
    <router-link to="/ztq">go to 侦听器</router-link>
    <br>
    <router-link to="/ztq2">go to 侦听器2</router-link>

    <router-view></router-view>
  </div>-->

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
// import Jisuanshuxing from './components/JisuanShuxing.vue'
// import tjxr from './components/条件渲染.vue'
// import Sqlite3 from './components/sqlite3.vue'
// import TodoList from './components/TodoList.vue'
// import mbyy from './components/MuBanYinYong.vue'
// import {useRouter} from 'vue-router'
// import { createMemoryHistory, createRouter } from 'vue-router'

// import {RouterLink} from 'vue-router'
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // base1,
    // Jianjie,
    // TodoList
    // jisuanshuxing: Jisuanshuxing
    // Jisuanshuxing,
    // tjxr
    // ,mbyy
  },
  setup() {


  }

  , methods: {
    // RouterLink(){
    //   return RouterLink
    // }
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
