const DBPool = require("./db")

const getNews = () => {
    return new Promise((resolve, reject) => {
        DBPool.query("SELECT * FROM core_news", (error, results) => {
            if (error) reject(error)
            else resolve(results.rows)
          })
    })
}

module.exports = {
    getNews: getNews
}