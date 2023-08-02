<template>

  <p>Has published books:</p>
  <!--  <span>{{ author.books.length > 0 ? 'Yes' : 'No' }}</span>-->
  <span>{{ publishedBooksMessage }}</span>

</template>

<script setup>
// const Database = require('better-sqlite3');
// const db = new Database('foobar.db', { verbose: console.log });
//
// const row = db.prepare(`SELECT * FROM table_name WHERE id = ?`).get(2);
// console.log(row.firstName, row.lastName, row.email);

// const db = require('better-sqlite3')('foobar.db', options);
//
// const row = db.prepare('SELECT * FROM users WHERE id = ?').get('12');
// console.log(row.firstName, row.lastName, row.email);

/*export default {
  // name: "计算属性",
  // data(){
  //   return{
  //     count:0,
  //     name:'John Doe',
  //     books: [
  //       'Vue 2 - Advanced Guide',
  //       'Vue 3 - Basic Guide',
  //       'Vue 4 - The Mystery'
  //     ]
  //   }
  // }

// }*/
</script>

<style scoped>

</style>