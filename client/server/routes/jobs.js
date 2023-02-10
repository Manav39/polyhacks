const express=require('express')
const router=express.Router()

const Jobs=require('../models/jobs')

router.get("/",async(req,res)=>{
    const jobs=await Jobs.find({})   
    res.send(jobs)
})
router.get("/byId/:id",async (req,res)=>{
    const id=req.params.id;
    const jobs=await Jobs.findById(id)
    res.json(jobs)
})

router.post("/createjob", async (req,res)=>{
    await Jobs.create(req.body)
    res.end()
})
module.exports=router