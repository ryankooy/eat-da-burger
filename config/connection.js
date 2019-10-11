require("dotenv").config();
var mysql = require('mysql');

var conn = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: "1289",
  database: "burgers_db"
});

conn.connect(function(err) {
  if(err) {
    console.error(`Error connecting: ${err.stack}`);
    return;
  }
  console.log(`Connected as id ${conn.threadId}`);
});

module.exports = conn;