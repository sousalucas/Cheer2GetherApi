const News = require("./model/news");

exports.handler = async (event) => {
    
    let newsList = [];

    newsList.push(new News("Lebron James is out of NBA playoffs", "2019-03-30 12:06:20", ["basketball", "NBA", "Lebron James"]))
    newsList.push(new News("Cristiano Ronaldo was announced as the new DAZN ambassor", "2018-08-22 10:31:24", ["soccer", "Cristiano Ronaldo", "DAZN"]))
    
    return newsList;
};
