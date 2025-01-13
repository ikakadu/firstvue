<template>
  <ul>
    <li v-for="user in users" :key="user.id">{{ user.name}} - {{user.age }}</li>
  </ul>
</template>

<!--
在Vue 3.x中，引入了组合式API（Composition API），其中onMounted是组合式API中的一个生命周期钩子，
与Vue 2.x中的mounted钩子类似，都是在组件挂载到DOM后调用。
但是，onMounted需要在setup函数中使用，
而mounted则直接在组件的选项对象中使用。
-->
<script >

import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  setup() {
    const users = ref([]);

    onMounted(async () => {
      const response = await axios.get('http://localhost:3000/users');
      users.value = response.data;
    });

    return { users };
  },
};

</script>

<style scoped>

</style>
