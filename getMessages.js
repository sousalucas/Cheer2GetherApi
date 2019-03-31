const queries = require("./queries");

exports.handler = async (event) => {
    let result  = await queries.getMessagesByGroupId(event.params.path.id);
    return result;
};
