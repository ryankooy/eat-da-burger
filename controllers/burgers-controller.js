var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
  burger.all(function(data) {
    var burgerObject = {
      burger: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    res.redirect("/");
  });
});

router.put("/api/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.update({
     devoured: true
  }, condition,
  function(result) {
     res.redirect("/");
  });
});

module.exports = router;
