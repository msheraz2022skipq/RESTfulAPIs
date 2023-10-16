const express = require('express')
const app = express()
const users = [
    {"username":"Sheraz", "userid":123},
    {"username":"Jason", "userid":345}
]

app.get('/users/:userid',(req,res)=>{
    const userData = users.filter(element=>element.userid===parseInt(req.params.userid))
    if(userData.length>0){
        res.status(200).send(userData)
    }
    else{
        res.status(404).send('Data for given ID not found')
    }
})

app.listen(3000,()=>{
    console.log("Listening at port 3000...");
})