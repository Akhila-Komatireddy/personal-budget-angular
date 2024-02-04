// Budget API

const express = require('express');
const app = express();
const port = 3000;
const budget = {
    myBudget: [
        {
            title: 'Eat out',
            budget: 33
        },
        {
            title: 'Rent',
            budget: 50
        },
        {
            title: 'Grocery',
            budget: 90
        },
    ]
};
app.use("/",express.static("public"));

console.log(budget)

app.get("/hello", (req,res) => {
    res.send("Hello Akhila Komatireddy");
})

app.get("/budget", (req,res) => {
    res.json(budget);
})

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});