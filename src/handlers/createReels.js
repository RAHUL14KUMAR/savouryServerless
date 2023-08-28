const connectDatabase=require('../Database/db');
const post =require('../models/reels');

module.exports.handler=async(event,context)=>{
    context.callbackWaitsForEmptyEventLoop=false;
    try{
        await connectDatabase();
        const {video,location,caption,postedBy}=JSON.parse(event.body)
        let userobj={
           video,location,caption,postedBy
        }
        userobj=await post.create(userobj);

        return{
            statusCode:200,
            body:JSON.stringify(userobj)
        }

    }catch(error){
        console.log(error);

        return{
            statusCode:500,
            body:JSON.stringify(error)
        }
    }
}