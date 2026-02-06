import express, { Request, Response } from "express";

const app = express();
const PORT: number = 3000;

app.get("/", (req: Request, res: Response) => {
    res.send(JSON.stringify({ message: "Api is running Congrats Naimesh" }));
});

app.listen(PORT, () => {
    console.log("server is running on port 3000");
});

app.get("/sum", (req: Request, res: Response) => {
    const { a, b } = req.query;

    // validation
    if (!a || !b) {
        return res.status(400).json({
            error: "both a and b are required"
        });
    }

    const num1: number = Number(a);
    const num2: number = Number(b);

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

app.get("/table", (req: Request, res: Response) => {
    const { num } = req.query;

    // what this check is -> if num is not present in the query
    if (!num) {
        return res.status(400).json({
            error: "Num is required"
        });
    }

    // converts the num to a number format
    const number: number = Number(num);

    // what this check is -> if num is not a number
    if (isNaN(number)) {
        return res.status(400).json({
            error: "Num must be a number"
        });
    }

    const table: string[] = [];

    for (let i = 1; i <= 10; i++) {
        table.push(`${number} x ${i} = ${number * i}`);
    }

    res.json({
        number,
        table
    });
});
