const mongoose=require('mongoose');
const Schema=mongoose.Schema

const userSchema=new Schema({
    email:{
        type:String,
    }
},{
    timestamps:true
})

module.exports=mongoose.model("User",userSchema);