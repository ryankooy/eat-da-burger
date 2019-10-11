// var mysql = require('mysql');

// var conn = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: '1289',
//   database: 'burgers_db',
//   details: {
//     dialect: 'mysql'
//   }
// });

// conn.connect(function(err) {
//   if(err) {
//     console.error(`Error connecting: ${err.stack}`);
//     return;
//   }
//   console.log(`Connected as id ${conn.threadId}`);
// });

// module.exports = conn;

module.exports = {
  development: {
    username: 'root',
    password: '1289',
    database: 'burgers_db',
    details: {
      host: 'localhost',
      port: 3306,
      dialect: 'mysql'
    }
  },
  test: {
    username: process.env.TU,
    password: process.env.TP || null,
    database: 'project2_test',
    details: {
      host: 'localhost',
      port: 3306,
      dialect: 'mysql',
      logging: false
    }
  },
  production: {
    'use_env_variable': 'JAWSDB_URL',
    details: {
      dialect: 'mysql'
    }
  }
};
