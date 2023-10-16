const express = require('express')

const routes = express.Router()

const userController = require('./userController')

routes.get("/",(req,res)=>{
    try {

        userController.getUsers((err,results)=>{
            if(err){
                return res.status(400).send(err)
            }
            return res.status(200).send({status:"OK", data: results})
        })
        
    } catch (error) {
        return res.status(500).send("Try after some time...")
        
    }
})

routes.get('/:userid',(req,res)=>{
    try {
        const userId = req.params.userid;
        userController.getUserById(userId,(err,results)=>{
            if(err){
                return res.status(400).send(err)
            }
            return res.status(200).send({status:"OK", data:results})
        })
    } catch (error) {
        return res.status(500).send("Try after some time...")
    }
})

routes.put('/:userId',(req,res)=>{
    try {
        const userId = req.params.userId
        const userName = req.body.userName
        userController.updateUserDetails(userId,userName,(err,results)=>{
            if(err){
                return res.status(400).send(err)
            }
            return res.status(200).send({status:"OK",data:results})
        })
    } catch (error) {
        return res.status(500).send('Try after some time...')
    }
})

module.exports = routes