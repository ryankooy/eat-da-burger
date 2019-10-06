var express = require("express");

var app = express();
var PORT = process.env.PORT || 3030;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./")(app);
require("./")(app);

app.listen(PORT, function() {
  console.log(`App is listening on ${PORT} . . .`);
});
