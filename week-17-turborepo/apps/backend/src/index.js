"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
app.get("/", function (req, res) {
    res.send("<h1>Hello from server</h1>");
});
app.listen(4000, function () {
    console.log("App is listening at http://localhost:4000");
});
