const mongoose=require('mongoose')

const jobSchema=new mongoose.Schema({
    jobCreator:{
        type:String,
        required:true
    },
    jobTitle:{
        type:String,
        required:true
    },
    jobDomain:{
        type:String,
        required:true
    },
    salaray:{
        type:String,
        required:true
    },
})

module.exports=mongoose.model("Jobs",jobSchema)