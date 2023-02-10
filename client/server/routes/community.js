const express=require('express')
const router=express.Router()

const Posts=require('../models/posts')
const Comments=require('../models/comment')

router.get("/", async (req,res)=>{
    const posts=await Posts.find({})
    res.send(posts)
})

router.get("/post/:id", async(req,res)=>{
    
        const id=req.params.id;
        const posts=await Posts.findById(id)
        res.json(posts)
})

router.post("/", async (req,res)=>{
    await Posts.create(req.body)
    res.send()
})

router.get("/comment/:postId", async (req,res)=>{
    const postId=req.params.postId
    const comments=await Comments.find({postId:postId})
    res.json(comments)
})

router.post("/comment/:postId", async (req,res)=>{
    const body=req.body
    const postId=req.params.postId
    body["postId"]=postId
    await Comments.create(body)
    res.end()
})

module.exports=router