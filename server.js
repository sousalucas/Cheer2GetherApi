const express = require("express");
const queries = require("./queries");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;


app.use(bodyParser.json())

app.post("/api/v1/auth", (req, res) => {
    // Twitter ? Facebook ?
});

app.get("/api/v1/news", async (req, res) => {
    let result  = await queries.getNews(req.query);
    res.status(200).json(result);
});

app.get("/api/v1/sports", async (req, res) => {
    let result  = await queries.getSports();
    res.status(200).json(result);
});

app.get("/api/v1/user/:id", async (req, res) => {
    let result  = await queries.getUserInfo(req.params.id);
    res.status(200).json(result);
});

app.post("/api/v1/group/message", async (req, res) => {
    await queries.createGroupMessage(req.body.message, req.body.groupId, req.body.userId)
    res.status(201).send();
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});