var express = require("express");

var indexRouter = require("./routes/index");
var infoRouter = require("./routes/info");
var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/v1.0/", indexRouter);
app.use("/api/v1.0/", infoRouter);

module.exports = app;
