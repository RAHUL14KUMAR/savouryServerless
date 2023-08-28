const connectDatabase = require('../Database/db');
const post = require('../models/reels');

module.exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    try {
        await connectDatabase();
        const { id } = event.pathParameters;
        const { userEmail } = JSON.parse(event.body);

        console.log(id);

        const posts = await post.findById(id);
        if (posts.like.includes(userEmail)) {
            await posts.updateOne({ $pull: { like: userEmail } });
            return {
                statusCode: 200,
                body: JSON.stringify("post disliked")
            };
        } else {
            await posts.updateOne({ $push: { like: userEmail } });
            return {
                statusCode: 200,
                body: JSON.stringify("post liked")
            };
        }
    } catch (error) {
        console.log(error);
        return {
            statusCode: 500,
            body: JSON.stringify(error)
        };
    }
};