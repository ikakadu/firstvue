<template>

  <button @click="count++">Add 1</button>
  <p>Count is: {{ count }}</p>
  <p>Has published books:</p>
  <!--  <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>-->
  <span>{{ publishedBooksMessage }}</span><br>
  <span>{{ calculateBooksMessage() }}</span>
  <p>{{now}}</p>
  <p>{{new Date().now}}</p>
  <span>{{ fullName }}</span>

<!--  <span>{{ changeName() }}</span>-->
  <div>
    <button @click="changeName()">changeName</button>
  </div>

  <br><br>
  <button @click="updateBool()">updateBool</button>
  <p>isActive is: {{ isActive }}</p>

  <div v-bind:class="{active: isActive }">qqq</div>
  <div
      class="static"
      :class="{ active: isActive, 'text-danger': hasError }"
  >yinyue</div>

</template>

<!--组合式API写法   <script setup>   -->
<script setup>

import {computed,reactive,ref} from "vue";
const count = ref(0)
const isActive = ref(false)
const hasError = ref(false)
/*export default {
  name: "计算属性",
  data(){
    return{
      count:0,
      name:'John Doe',
      books: [
        'Vue 2 - Advanced Guide',
        'Vue 3 - Basic Guide',
        'Vue 4 - The Mystery'
      ]
    }
  }
}*/

const author = reactive({
  name: 'John Doe',
  books: [
    'Vue 2 - Advanced Guide',
    'Vue 3 - Basic Guide',
    'Vue 4 - The Mystery'
  ]
})
const publishedBooksMessage = computed(()=>{
  return author.books.length>0 ? "YES" : "NO"
  // return books.length>0 ? "YES" : "NO"
})

function calculateBooksMessage() {
  return author.books.length > 0 ? 'Yes' : 'No'
}
let fullNameTem = "";
let fullName2 = "xiaoGou wangwang";
function changeName() {
  // console.log("fullName:"+fullName);
  console.log("fullName.value:"+fullName.value);

  if (fullNameTem == ""){
    console.log("1")
    fullNameTem = fullName.value;
    fullName.value = fullName2;
  }else {
    console.log("2")
    fullName.value = fullNameTem
    fullNameTem =fullName2;
    fullName2 = fullName.value;
  }
}
function updateBool() {
  if (isActive.value){
    isActive.value = false
  }else {
    isActive.value = true
  }
}

const now = computed(() => Date.now())
const firstName = ref('KAKA')
const lastName = ref('Doe')

const fullName = computed({
  // getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  // setter
  set(newValue) {
    // 注意：我们这里使用的是解构赋值语法
    [firstName.value, lastName.value] = newValue.split(' ')
  }
})
</script>

<style scoped>

</style>