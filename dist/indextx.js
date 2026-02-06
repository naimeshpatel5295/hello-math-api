"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send(JSON.stringify({ message: "Api is running Congrats Naimesh" }));
});
app.listen(PORT, () => {
    console.log("server is running on port 3000");
});
app.get("/sum", (req, res) => {
    const { a, b } = req.query;
    // validation
    if (!a || !b) {
        return res.status(400).json({
            error: "both a and b are required"
        });
    }
    const num1 = Number(a);
    const num2 = Number(b);
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
app.get("/table", (req, res) => {
    const { num } = req.query;
    // what this check is -> if num is not present in the query
    if (!num) {
        return res.status(400).json({
            error: "Num is required"
        });
    }
    // converts the num to a number format
    const number = Number(num);
    // what this check is -> if num is not a number
    if (isNaN(number)) {
        return res.status(400).json({
            error: "Num must be a number"
        });
    }
    const table = [];
    for (let i = 1; i <= 10; i++) {
        table.push(`${number} x ${i} = ${number * i}`);
    }
    res.json({
        number,
        table
    });
});
