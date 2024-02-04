// Budget API

const express = require('express');
const app = express();
const port = 3000;
const budget = require("./data.json");
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