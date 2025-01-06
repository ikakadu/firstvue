<!--

<template>
  <input ref="input2" />
  <input ref="input1" />
</template>


<script>
export default {
  mounted() {
    this.$refs.input2.focus()
  }
}
</script>

-->

<script>
export default {
  data() {
    return {
      list: [1, 2, 3,4,5,6,7,8,9,0]
    }
  },
  mounted() {
    // console.log(this.$refs.items)
    // console.log(typeof this.$refs.items)
    let arr =  this.$refs.items
    for (let x of arr) {
      console.log(x.innerText);
    }
    // arr.forEach(function(value, index) {
    //   console.log(value.innerText);
    // });
  }
}
</script>

<template>
  <ul>
    <li v-for="item in list" ref="items" v-bind:key="item">
<!--    <li v-for="item in list" >-->
      {{ item }}
    </li>
  </ul>
</template>
