import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.get('/Next', (req, res) => {
    res.send("Hello Next");
});

app.listen(3000, () => {
    console.log("Server is running on Port 3000");
}); 