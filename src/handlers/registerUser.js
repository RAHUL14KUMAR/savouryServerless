const connectDatabase=require('../Database/db');
const post =require('../models/user');

module.exports.handler=async(event,context)=>{
    context.callbackWaitsForEmptyEventLoop=false;
    try{
        await connectDatabase();
        const {email}=JSON.parse(event.body)
        let userobj={
           email
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