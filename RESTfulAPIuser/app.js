const express = require('express')
const app = express()
const config = require('./config')
const userRouter = require('./User')
const LoggerMiddleware = (req,res,next)=>{
    console.log(`Logged ${req.url} ${req.method}`);
    next()
}

app.use(LoggerMiddleware)
app.use(express.json())
app.use('/api/v1/users', userRouter)
app.use((req,res,next)=>{
    res.status(400).send("Resourse not found...")
})

app.listen(config.PORT,()=>{
    console.log("Listening on port 3000...");
})