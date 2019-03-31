const queries = require("./queries");

exports.handler = async (event) => {
    let result  = await queries.getGroups();
    return result;
};
