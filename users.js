const News = require("./model/news");
const queries = require("./queries");

exports.handler = async (event) => {
    let result  = await queries.getUserInfo(event.params.path.id);
    return result;
};
