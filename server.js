const express = require("express");
const DBPool = require("./db")
const queries = require("./queries")
const app = express();
const PORT = 5000;

app.post("/api/v1/auth", (req, res) => {
    // Twitter ? Facebook ?
});

app.get("/api/v1/news", async (req, res) => {
    let result  = await queries.getNews(req.query.sportId);
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

app.post("/api/v1/group/reaction", (req, res) => {
    DBPool.query("INSERT INTO core_reaction(id, message, created_at, news_id, user_id) VALUES (?,?,?,?,?)", (error, results) => {
        if (error) {
          throw error
        }
        return res.status(200).json(results.rows)
      })
});

app.post("/api/v1/group/message", (req, res) => {
    DBPool.query("SELECT * FROM core_news", (error, results) => {
        if (error) {
          throw error
        }
        return res.status(200).json(results.rows)
      })
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`)
});