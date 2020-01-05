var conn = require("./connection.js");

var orm = {
  selectAll: function(input, cb) {
    var qS = "select * from " + input;
    qS += " order by id desc;";
    conn.query(qS, function(err, res) {
      if(err) throw err;
      cb(res);
    });
  },
  insertOne: function(table, cols, vals, cb) {
    var qS = "insert into " + table;
    qS += ` (${cols}) values ("${vals}");`;
    console.log(qS);

    conn.query(qS, vals, function(err, res) {
      if(err) throw err;
      cb(res);
    });
  },
  updateOne: function(table, objColVals, condition, cb) {
    var qS = "update " + table;
    qS += ` set ${objColVals} where ${condition};`;
    console.log(qS);

    conn.query(qS, function(err, res) {
      if(err) throw err;
      cb(res);
    });
  }
};

module.exports = orm;
