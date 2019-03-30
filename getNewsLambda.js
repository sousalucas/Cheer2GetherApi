const News = require("./model/news");
const DBPool = require("./db");

exports.handler = async (event) => {
    
    DBPool.query("SELECT * FROM core_news", (error, results) => {
        if (error) {
          throw error
        }
        return res.status(200).json(results.rows)
      })
};
