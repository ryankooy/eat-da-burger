require("dotenv").config();
var mysql = require('mysql');

var conn = mysql.createConnection({
  host: 'g8mh6ge01lu2z3n1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  port: 3306,
  user: 'yjtz1wsr8w7fhwlr',
  password: process.env.JAWSDB_PASSWORD,
  database: 'xnvmz8qdtdiya9em',
  details: {
    dialect: 'mysql'
  }
});

conn.connect(function(err) {
  if(err) {
    console.error(`Error connecting: ${err.stack}`);
    return;
  }
  console.log(`Connected as id ${conn.threadId}`);
});

module.exports = conn;