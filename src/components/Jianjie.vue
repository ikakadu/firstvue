<script>
export default {
  data() {
    return {
      count: 0,
      i: 2
      , awesome: false
      , myObject: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },
      // ,todos:["吃饭","学习","工作","娱乐"]
      todos: [
        {
          id: 1,
          title: 'Do the dishes'
        },
        {
          id: 2,
          title: 'Take out the trash'
        },
        {
          id: 3,
          title: 'Mow the lawn'
        }
      ]
      , items: [{message: 'Foo', id: "2"}, {message: 'Bar', id: "1"}]
      , numbers: [2, 3, 1, 9,6 ,4, 5]
      , sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
      , message: '',
      orderBy: ["c1", "c2"], //可以控制字段的先后顺序，想调整列的先后顺序，改这个数组就行，可以做个性化设置
      tableTh: {//表头的描述信息
        c1: {
          title: "公司名称", //还可以增加其他描述，比如width等
          align: "left"
        },
        c2: {
          title: "电话",
          align: "right"
        }
      },
      dataList: [
        {
          //数据包，字段名作为关键字，便于列的调整先后顺序
          c1: "度娘2",
          c2: "123123123"
        },
        {
          c1: "企鹅2",
          c2: "7897899787"
        },
        {
          c1: "阿里爸爸2",
          c2: "456456456"
        }
      ]

    }
  },
  computed: {
    AAAA() {
      return Date.now()
    }
    ,evenNumbers() {
      return this.numbers.filter(n => n % 2 === 0)
    }
    ,replace1(){
        return  this.items.filter((item)=>item.message.match(/Foo/));
      }

  }
  ,mounted() {

  }
  ,methods: {
    increment() {
      this.count++
    }
    ,time() {
      return  Date.now()
    }
    ,replace2(){
      return this.items.filter((item)=>item.message.match(/Foo/));
    }

    ,revers11(){
      return this.numbers.reverse();
    }
    ,push(a){
      return this.numbers.push(a);
    }
    ,sort(){
      return this.numbers.sort(function (a, b) {
        return a-b;
      });
    }
    ,greet(event) {
      // 方法中的 `this` 指向当前活跃的组件实例
      alert(`Hello ${this.name}!`)
      alert(`Hello ${event}!`)
      // `event` 是 DOM 原生事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  },



}
</script>

<template>
<!--  <button @click="increment">Count is: {{ count }}</button>-->

  <button @click=" i = time()" >Count is: {{ i }}</button>



  <button @click="awesome = !awesome">Toggle</button>

  <h1 v-if="awesome">Vue is awesome!</h1>
  <h1 v-else>Oh no 😢</h1>

  <h1 v-show="awesome">Hello!</h1>

  <ul>
    <li v-for="value in myObject">
      {{ value }}
    </li>
  </ul>

  <li v-for="(value, key) in myObject">
    {{ key }}: {{ value }}
  </li>

  <li v-for="(value, key, index) in myObject">
    {{ index }}. {{ key }}: {{ value }}
  </li>

<!--  <ul>
    <template v-for="item in items">
      <li>{{ item.message }}</li>
      <li class="divider" role="presentation"></li>
    </template>
  </ul>-->

  <div v-for="item in items" :key="item.id">
    <!-- 内容 -->
    {{item.message}}
  </div>


  <template v-for="todo in todos">
    <li v-if="!todo.isComplete">
      {{ 11111 }}
    </li>
  </template>



<!--  <button v-on:click="replace()">"replace"</button>-->
  <button @click="i=replace2()">replace</button>{{ i }}
  <button @click="revers11()">reverse</button>
  <button @click="push(count++)">push</button>
  <button @click="sort()">sort</button>
  <!-- `greet` 是上面定义过的方法名 -->
  <button @click="greet">Greet</button>
  <br/>
  <input :value="text" @input="event=>text = event.target.value">
  <br/>
  <p>Message is: {{message}}</p>
  <input v-model="message" placeholder="edit edit">
  <br/>
  <span>Multiline message is:</span>
  <p style="white-space: pre-line;"> {{message}}</p>
  <textarea v-model="message" placeholder="multiasdasda"></textarea>
  <br/>
  <li v-for="n in numbers">{{n}}</li>
    {{replace1}}
  <!--  <li v-for="todo in todos" v-if="!todo.isComplete">
      {{ todo.name }}
    </li>-->
  <li v-for="n in evenNumbers">{{n}}</li>
  <div v-for="item in replace" :key="item.id">
    <!-- 内容 -->
    {{item.message}}
  </div>

  <ul v-for="numbers in sets">
    <li v-for="number in numbers">{{number}}</li>
  </ul>

  <table>
    <tr>
      <td></td>
    </tr>
  </table>

  <div>
    {{ message }}
    <table class="table_default1">
      <tr>
        <th>序号</th>
        <th v-for="key in orderBy" >
          {{tableTh[key].title}}
        </th>
      </tr>
      <tr v-for="(tr,a) in dataList">
        <td>{{a+1}}</td>
        <td v-for="key in orderBy" v-bind:align="tableTh[key].align">
          {{tr[key]}}
        </td>
      </tr>
    </table>
  </div>



</template>

<style scoped>
button {
  font-weight: bold;
}
</style>
