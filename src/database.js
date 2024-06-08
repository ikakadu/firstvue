// // import sqlite3 from 'sqlite3'
// // import { open } from 'sqlite'
// //
// // // this is a top-level await
// // (async () => {
// //     // open the database
// //     const db = await open({
// //         filename: '/tmp/database.db',
// //         driver: sqlite3.Database
// //     })
// // })()
//
// const sqlite = require('better-sqlite3')
// const path = require('path')
//
// const dbPath = path.join(__dirname, 'database.sqlite')
// const db = new sqlite(dbPath)
//
// const initDb = () => {
//     db.prepare(`
//     CREATE TABLE IF NOT EXISTS todos (
//       id INTEGER PRIMARY KEY AUTOINCREMENT,
//       text TEXT NOT NULL,
//       completed INTEGER NOT NULL DEFAULT 0
//     );
//   `).run()
// }
//
// module.exports = {
//     db,
//     initDb,
// }
