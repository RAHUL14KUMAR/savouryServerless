const mongoose=require('mongoose')

let conn=null;
module.exports=connectDatabase=async()=>{
    if(conn==null){
        console.log("creating new connection to the database...")
        conn=await mongoose.connect(process.env.DB,{
            serverSelectionTimeoutMS:5000,
            useNewUrlParser:true
        });
        return conn;
    }
    console.log("connection already established,reusing the connection")
};