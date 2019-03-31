const DBPool = require("./db")

const getNews = (filters) => {
    return new Promise((resolve, reject) => {
        if(filters.banner){
            DBPool.query("SELECT * FROM core_news WHERE banner = true", [], (error, results) => {
                if (error) reject(error)
                else resolve(results.rows)
              })            
        }else {
            let filter = "";
            let filterParam = [];
            
            if(filters.sportId){
                filter = " WHERE sport_id = $1";
                filterParam.push(filters.sportId);
            }

            if(filters.description){
                filter = " WHERE (LOWER(title) LIKE LOWER($1) OR LOWER(message) LIKE LOWER($1))";
                filterParam.push(`%${filters.description}%`);
            }

            DBPool.query("SELECT * FROM core_news" + filter, filterParam, (error, results) => {
                if (error) reject(error)
                else resolve(results.rows)
              })
        }
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

const createGroupMessage = (params) => {
    return new Promise((resolve, reject) => {
        let parameters = [params.message, params.groupId, params.userId]
        DBPool.query("INSERT INTO core_groupmessage(message, created_at, group_id, user_id) VALUES ($1, NOW(), $2, $3)", parameters, (error, results) => {
            if (error) reject(error)
            else resolve()
          })
    })
}

const getGroups = () => {
    return new Promise((resolve, reject) => {
        DBPool.query("SELECT * FROM core_usergroup", (error, results) => {
            if (error) reject(error)
            else resolve(results.rows)
        })
    })
}

const getMessagesByGroupId = (groupId) => {
    return new Promise((resolve, reject) => {
        DBPool.query("SELECT * FROM core_groupmessage where group_id = $1", [groupId], (error, results) => {
            if (error) reject(error)
            else resolve(results.rows)
        })
    })
}

module.exports = {
    getNews: getNews,
    getSports: getSports,
    getUserInfo: getUserInfo,
    createGroupMessage: createGroupMessage,
    getGroups: getGroups,
    getMessagesByGroupId: getMessagesByGroupId
}