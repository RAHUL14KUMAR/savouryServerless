const connectDatabase=require('../Database/db');
const post =require('../models/reels');

module.exports.handler=async(event,context)=>{
    context.callbackWaitsForEmptyEventLoop=false;
    try{
        await connectDatabase();

        const posts=await post.find({})
        if(posts){
            return{
                statusCode:200,
                body:JSON.stringify(posts)
            }
        }else{
            return{
                statusCode:404,
                body:JSON.stringify("pots are not found")
            }
        }

    }
    catch(error){
        console.log(error);
        return{
            statusCode:500,
            body:JSON.stringify(error)
        }
    }
}