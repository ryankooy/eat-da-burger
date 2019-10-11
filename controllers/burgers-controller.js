var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var burgerObject = {
      burger: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

// router.post("/", function(req, res) {
//   burger.insertOne([
//     "burger_name", "devoured"
//   ], [
//     req.body.burger_name, req.body.devoured
//   ], function(result) {
//     res.json({ id: result.insertId });
//   });
// });

// router.put("/", function(req, res) {
//   burger.updateOne([
//     "burger_name", "devoured"
//   ], [
//     req.body.burger_name, req.body.devoured
//   ], function(result) {
//     res.json({ id: result.insertId });
//   });
// });

module.exports = router;