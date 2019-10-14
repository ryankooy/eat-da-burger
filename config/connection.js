var mysql = require("mysql");
require("dotenv").config();

var conn;

if(process.env.JAWSDB_URL) {
  conn = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  conn = mysql.createConnection({
    host: process.env.JAWSDB_HOST,
    port: 3306,
    user: process.env.JAWSDB_USERNAME,
    password: process.env.JAWSDB_PASSWORD,
    database: "kckwicbec2ar46zz"
  });
}

conn.connect(function(err) {
  if(err) {
    console.error(`Error connecting: ${err.stack}`);
    return;
  }
  console.log(`Connected as id ${conn.threadId}`);
});

module.exports = conn;