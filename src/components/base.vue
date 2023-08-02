<!--<template>-->

<!--&lt;!&ndash;  <button @click="count++">&ndash;&gt;-->
<!--&lt;!&ndash;    {{ state.count }}&ndash;&gt;-->
<!--&lt;!&ndash;  </button>&ndash;&gt;-->

<!--  <div id="app">-->
<!--    <button @click="count++">-->
<!--      +1-->
<!--&lt;!&ndash;      Count is: {{ count }}&ndash;&gt;-->
<!--    </button>-->
<!--    Count is: {{ count }}-->
<!--  </div>-->

<!--  <div>-->
<!--    <button @click="Save_project">-->
<!--      跳转链接-->
<!--    </button>-->
<!--  </div>-->

<!--  <input type="checkbox" id="radio11" v-model="checked" />-->
<!--  <label for="radio11">{{checked}}</label>-->

<!--  <div>Checked Names : {{checkedNames}}</div>-->
<!--  <input type="checkbox" id="jack" name="jack1" value="jack2" v-model="checkedNames">-->
<!--  <label for="jack">Jack3</label>-->

<!--  <input type="checkbox" id="John" name="jack12" value="John" v-model="checkedNames">-->
<!--  <label for="John">John</label>-->


<!--  <form action="form_action.asp" method="get">-->
<!--    <p>Name: <input type="text" name="fullname" /></p>-->
<!--    <p>Email: <input type="text" name="email" /></p>-->
<!--    <input type="submit" value="Submit" />-->
<!--  </form>-->

<!--  <div>Picked:{{picked}}</div>-->
<!--  <input type="radio" id="one" value="one" v-model="picked">-->
<!--  <label for="one">one</label>-->
<!--  <input type="radio" id="two" value="two" v-model="picked">-->
<!--  <label for="two">two</label>-->

<!--  <div>Selected:{{selected}}</div>-->
<!--  <select v-model="selected">-->
<!--    <option disabled value="">选择一个</option>-->
<!--    <option value="AA">A</option>-->
<!--    <option value="BB">B</option>-->
<!--    <option value="CC">C</option>-->
<!--  </select>-->

<!--  <div>selectedList:{{selectedList}}</div>-->
<!--  <select v-model="selectedList" multiple>-->
<!--    <option disabled value="" >选择多个</option>-->
<!--    <option>A</option>-->
<!--    <option>B</option>-->
<!--    <option>C</option>-->
<!--  </select>-->

<!--  <br/>-->
<!--  <select v-model="selected" >-->
<!--    <option v-for="option in options" :value="option.value">-->
<!--      {{option.text}}-->
<!--    </option>-->
<!--  </select>-->
<!--  <div>Selected: {{ selected }}</div>-->

<!--  <input type="radio" v-model="picked" value="aaa">-->
<!--  <br/>-->
<!--  <input type="checkbox" v-model="toogle">-->


<!--</template>-->

<!--<script>-->
<!--import axios from 'axios'-->
<!--axios.defaults.baseURL = '/api' //通过前端设置代理跨域访问-->

<!--export default {-->
<!--  data(){-->
<!--    return{-->
<!--      checked:true-->
<!--      ,checkedNames: []-->
<!--      ,picked:1-->
<!--      ,selected:""-->
<!--      ,selectedList:""-->
<!--      ,toogle:""-->
<!--      ,count: 0-->
<!--      ,options:[-->
<!--          {text:"one",value:"A"}-->
<!--          ,{text:"two",value:"B"}-->
<!--          ,{text:"three",value:"C"}-->
<!--      ]-->
<!--    }-->
<!--  }-->
<!--  ,created(){-->
<!--    this.dataChange(['2021-01-01 00:00:00'])-->
<!--  }-->
<!--  ,methods:{-->
<!--    dataChange(val) {-->
<!--      console.log(`时间格式-&#45;&#45;`, new Date());//时间格式-&#45;&#45; (2) ['2021-01-01', '2021-01-09', __ob__: Observer]-->
<!--      console.log(`时间格式-&#45;&#45;`, new Date().toISOString());//时间格式-&#45;&#45; (2) ['2021-01-01', '2021-01-09', __ob__: Observer]-->
<!--      console.log(`时间格式-&#45;&#45;`, new Date(val[0]));//时间格式-&#45;&#45; (2) ['2021-01-01', '2021-01-09', __ob__: Observer]-->
<!--      console.log(`时间格式-&#45;&#45;`, val)//时间格式-&#45;&#45; (2) ['2021-01-01', '2021-01-09', __ob__: Observer]-->
<!--      const date = new Date((+new Date(val[0]) + 8 * 3600 * 1000)) //new Date() 括号里的加上丢失的8小时-->
<!--      console.log(`时区格式-&#45;&#45;`, date.toUTCString())//时区格式-&#45;&#45; 2021-01-01T00:00:00.000Z-->
<!--      console.log(`时区格式-&#45;&#45;`, date.toISOString())//时区格式-&#45;&#45; 2021-01-01T00:00:00.000Z-->
<!--    },-->
<!--    Save_project(){-->
<!--      // axios.post('http://localhost:8080/dd',this.form)-->
<!--      // axios.get('/s?ie=UTF-8&wd=vue') //跨域访问百度-->
<!--      axios.get('/dd') //通过前端设置代理跨域访问本地后端-->
<!--        .then(-->
<!--          this.$message({-->
<!--            message:"保存成功",-->
<!--            type:"success"-->
<!--          })-->
<!--      )-->
<!--    }-->


<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->