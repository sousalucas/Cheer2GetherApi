const News = require("./model/news");
const queries = require("./queries");

exports.handler = async (event) => {
    let result  = await queries.getSports();
    return result;
};
