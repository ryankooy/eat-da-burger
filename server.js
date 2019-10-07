var express = require("express");

var app = express();
var PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers-controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log(`App is listening on ${PORT} . . .`);
});
