var express = require("express");
var methodOverride = require('method-override');

var app = express();
var PORT = process.env.PORT || 3030;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers-controller.js");

app.use("/", routes);

app.listen(PORT, function() {
  console.log(`App is listening on ${PORT} . . .`);
});
