/*这是node后端代码，
简单执行方式：node + 文件名
或者nohup方式等等，例如 nohup node app.js
*/


const express = require('express');
const Database = require('better-sqlite3');
const app = express();
const cors = require('cors');//引入跨域


// 使用cors中间件
app.use(cors());//解决跨域问题
// 数据库连接
const db = new Database('example.db');

// 创建表
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INTEGER
  )
`);

// 获取用户列表
app.get('/users', (req, res) => {
    const stmt = db.prepare('SELECT * FROM users');
    const users = stmt.all();
    res.json(users);
});

// 启动服务器
app.listen(3000, () => console.log('Server running on http://localhost:3000'));
