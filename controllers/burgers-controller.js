var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
  res.redirect("/burger");
});

router.get("/burger", function(req, res) {
  burger.all(function(data) {
    var burgerObject = {
      burger: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("/burger/create", function(req, res) {
  burger.create([
    "burger_name"
  ], [
    req.body.burger_name
  ], function() {
    res.redirect("/burger");
  });
});

router.put("/burger/update/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  
  burger.update({
     devoured: req.body.devoured
  }, condition,
  function() {
     res.redirect("/burger");
  });
});

module.exports = router;