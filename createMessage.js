const queries = require("./queries");

exports.handler = async (event) => {
    let params = {message: event['body-json'].message, groupId: event['body-json'].groupId, userId: event['body-json'].userId}
    await queries.createGroupMessage(params);
    return
};
