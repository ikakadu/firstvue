<template>
  <p>has:</p>
</template>

<script>

// const sqlite3 = require('@/components/sqlite3').verbose();
// const db = new Sqlite3.Database(':memory:');
import sqlite3 from 'sqlite3'
import { open } from 'sqlite'

// this is a top-level await
let db
(async () => {
  // open the database
  db = await open({
    filename: '/tmp/database.db',
    driver: sqlite3.Database
  })
})()

db.serialize(() => {
  db.run("CREATE TABLE lorem (info TEXT)");

  const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (let i = 0; i < 10; i++) {
    stmt.run("Ipsum " + i);
  }
  stmt.finalize();

  db.each("SELECT rowid AS id, info FROM lorem", (err, row) => {
    console.log(row.id + ": " + row.info);
  });
});

db.close();

export default {
  name: "sqlite3"
}
</script>

<style scoped>

</style>
