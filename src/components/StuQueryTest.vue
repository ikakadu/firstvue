<template>
  <div>
    <div>
<!--      <form @submit.prevent="onSubmit">-->
<!--      <form @submit.prevent>-->
      <form>
<!--        <input v-model="stuName" placeholder="名字">-->
        <!-- 更多表单字段 -->
        <button id="bt1" type="button"  @click="queryStuData">获取数据</button>
<!--        <button type="button">提交</button>-->
      </form>

      <button @click="cleanStuData">
        清除数据
      </button>
    </div>
    <h1>row Data Table</h1>
    <table >
      <thead>
      <tr>
        <th class="col1">ID</th>
        <th class="col1">Name</th>
        <th class="col1">birthDay</th>
        <th class="col1">address</th>
      </tr>
      </thead>
      <tbody>
      <!-- 使用v-for遍历数据渲染表格行 -->
      <tr v-for="row in tableData" :key="row.id">
        <td>{{ row.id }}</td>
        <td>{{ row.name }}</td>
        <td>{{ row.birthDay }}</td>
        <td>{{ row.address }}</td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import { ref, onMounted } from 'vue'; // ref用于定义响应式数据，onMounted用于组件挂载时执行动作
import axios from 'axios';

export default {


  /*setup() {
    // 定义响应式数据
    const tableData = ref([]);

    // 使用 onMounted 在组件挂载时调用API获取数据
    onMounted(() => {
      axios
          // .get('https://jsonplaceholder.typicode.com/tableData')
          // .post('http://localhost:8080/dd',this.form)
          .post('http://localhost:8080/dd')
          .then(response => {
            tableData.value = response.data.stuList; // 将获取到的数据存储在Stus中
            console.log(tableData.value);
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
    });
    return {
      tableData
    };
  }*/


  data() {
    return {
      // tableData : ref([])
      tableData : [],
      stuName : ""
    }
  }
  ,  methods:{
    queryStuData(){
      console.log("queryStuData:")
      console.log(document.getElementById("bt1").type);
      let  jsonData = {
        "name": this.stuName,
        "birthDay" : 18,
        "address" : "浦东花木"
      };
      console.log(jsonData);
      axios.post('http://localhost:8080/dd',jsonData)
          .then(
              response => {
                this.tableData = response.data.stuList; // 在选项式API中，不能赋值给ref对象的.value，例如this.tableData.value = response.data.stuList;
                // console.log(response);
                console.log(this.tableData);
              }
          )
    }
    ,cleanStuData(){
      this.tableData = [];
      this.stuName ="";
    }
    ,onSubmit(){
      console.log("aaaqqq")
    }
  }


};
</script>

<style scoped>
/* 可选：自定义表格样式 */
table {
  width: 100%;
  border-collapse: collapse;  /* 合并边框 */
}
th, td {
  padding: 10px;
  text-align: center;
  border: 1px solid ;
}
th {
  background-color: #f4f4f4;
}
.col1 {
  width: 25%;
}
</style>