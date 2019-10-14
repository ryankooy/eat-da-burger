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

router.post("/", function(req, res) {
  burger.insertOne([
    "burger_name"
  ], [
    req.body.burger_name
  ], function(result) {
    // burgerObject.push(result);
    res.render("index", burgerObject);
    console.log(result);
  });
});

router.put("/", function(req, res) {
  var condition = "id = " + req.params.id;
  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      console.log(result);
    });
});

// var burger = require('../models/burger.js');

// // Create the routes and associated logic
// router.get('/', function(req, res) {
//   burger.selectAll(function(data) {
//     var hbsObject = {
//       burgers: data
//     };
//     // console.log(hbsObject);
//     res.render('index', hbsObject);
//   });
// });

// router.post('/burgers', function(req, res) {
//   burger.insertOne([
//     'burger_name'
//   ], [
//     req.body.burger_name
//   ], function(data) {
//     res.redirect('/');
//   });
// });

// router.put('/burgers/:id', function(req, res) {
//   var condition = 'id = ' + req.params.id;

//   burger.updateOne({
//     devoured: true
//   }, condition, function(data) {
//     res.redirect('/');
//   });
// });

module.exports = router;