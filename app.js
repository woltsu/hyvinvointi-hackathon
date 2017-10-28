var express = require("express");
var app = express();
var port = process.env.port || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.use(function (err, req, res, next) {
    res.status(404).send("404 not found :(");
});

var defaultController = require("./controllers/defaultController");
defaultController(app);

app.set("view engine", "ejs");

app.listen(port);