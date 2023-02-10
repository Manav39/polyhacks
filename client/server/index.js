const express=require('express')
const app=express()
const cors=require('cors')


app.use(express.json())
app.use(cors())


const connectdb=require('./db/connect')

const communityRouter=require('./routes/community')
app.use("/community",communityRouter)

const jobRouter=require('./routes/jobs')
app.use("/jobs",jobRouter)

const start=async ()=>{
     connectdb('mongodb+srv://Manav:manav@cluster0.d9dv9cl.mongodb.net/?retryWrites=true&w=majority') 
    app.listen(8800,()=>{
        console.log("Hello")
    })   
}
start()

//mongodb+srv://<username>:<password>@cluster0.b7gen.mongodb.net/?retryWrites=true&w=majority