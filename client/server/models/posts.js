const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    post:{
        type:String,
        required:true
    },
    

})

module.exports=mongoose.model("Post",postSchema)