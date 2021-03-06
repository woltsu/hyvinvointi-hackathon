var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

app.use("/assets", express.static(__dirname + "/public"));

app.use(function (err, req, res, next) {
    res.status(404).send("404 not found :(");
});

var defaultController = require("./controllers/defaultController");
var timelineController = require("./controllers/timelineController");
defaultController(app);
timelineController(app);

app.set("view engine", "ejs");

app.listen(port);