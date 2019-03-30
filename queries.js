const DBPool = require("./db")

const getNews = (sportId) => {
    return new Promise((resolve, reject) => {
        let filter = sportId ? " WHERE sport_id = $1" : "";
        DBPool.query("SELECT * FROM core_news" + filter, (sportId ? [sportId] : []), (error, results) => {
            if (error) reject(error)
            else resolve(results.rows)
          })
    })
}

const getSports = () => {
    return new Promise((resolve, reject) => {
        DBPool.query("SELECT * FROM core_sport", (error, results) => {
            if (error) reject(error)
            else resolve(results.rows)
          })
    })
}

const getUserInfo = (userId) => {
    return new Promise((resolve, reject) => {
        DBPool.query("SELECT * FROM core_user where id = $1", [userId], (error, results) => {
            if (error) reject(error)
            else resolve(results.rows && results.rows.length > 0 ? results.rows[0] : null)
          })
    })
}

module.exports = {
    getNews: getNews,
    getSports: getSports,
    getUserInfo: getUserInfo
}