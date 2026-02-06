"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var app = (0, express_1.default)();
var PORT = 3000;
app.get("/", function (req, res) {
    res.send(JSON.stringify({ message: "Api is running Congrats Naimesh" }));
});
app.listen(PORT, function () {
    console.log("server is running on port 3000");
});
app.get("/sum", function (req, res) {
    var _a = req.query, a = _a.a, b = _a.b;
    // validation
    if (!a || !b) {
        return res.status(400).json({
            error: "both a and b are required"
        });
    }
    var num1 = Number(a);
    var num2 = Number(b);
    if (isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({
            error: "both a and b must be numbers"
        });
    }
    res.json({
        a: num1,
        b: num2,
        sum: num1 + num2
    });
});
app.get("/table", function (req, res) {
    var num = req.query.num;
    // what this check is -> if num is not present in the query
    if (!num) {
        return res.status(400).json({
            error: "Num is required"
        });
    }
    // converts the num to a number format
    var number = Number(num);
    // what this check is -> if num is not a number
    if (isNaN(number)) {
        return res.status(400).json({
            error: "Num must be a number"
        });
    }
    var table = [];
    for (var i = 1; i <= 10; i++) {
        table.push("".concat(number, " x ").concat(i, " = ").concat(number * i));
    }
    res.json({
        number: number,
        table: table
    });
});
