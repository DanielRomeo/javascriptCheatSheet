"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var add = function (a, b) { return a + b; };
app.get('/', function (req, res, next) {
    console.log(add(5, "aaa"));
    res.send("hello");
});
app.listen(5000, function () { return console.log("server started"); });
