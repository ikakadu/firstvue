<template>
  <button @click="show = !show">Toggle</button>
  <Transition>
    <p v-if="show">hello</p>
  </Transition>


<!--  <Transition name="slide-fade">-->
<!--    <p v-if="show">hello</p>-->
<!--  </Transition>-->
</template>

<script>
export default {
  name: "InnerComp"
  ,data() {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
/* 下面我们会解释这些 class 是做什么的 */
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

/*
  进入和离开动画可以使用不同
  持续时间和速度曲线。
*/
/*.slide-fade-enter-active {*/
/*  transition: all 0.3s ease-out;*/
/*}*/

/*.slide-fade-leave-active {*/
/*  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);*/
/*}*/

/*.slide-fade-enter-from,*/
/*.slide-fade-leave-to {*/
/*  transform: translateY(-90px);*/
/*  opacity: 0;*/
/*}*/
</style>