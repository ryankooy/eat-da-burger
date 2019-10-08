var conn = require("./connection.js");

function questMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

function objectToSql(ob) {
  var arr = [];
  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = `"${value}"`;
      }
      arr.push(`${key}=${value}`);
    }
  }
  return arr.toString();
}

var orm = {
  all: function(cb) {
    var qS = "select * from burgers";
    conn.query(qS, function(err, res) {
      if(err) throw err;
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    var qS = "insert into burgers";
    qS += ` (${cols.toString()}) values (${questMarks(vals.length)}) `;
    console.log(qS);

    conn.query(qS, vals, function(err, res) {
      if(err) throw err;
      cb(res);
    });
  },
  update: function(objectCV, condition, cb) {
    var qS = "update burgers";
    qS += ` set ${objectToSql(objectCV)} where ${condition}`;
    console.log(qS);

    conn.query(qS, function(err, res) {
      if(err) throw err;
      cb(res);
    });
  }
};

module.exports = orm;