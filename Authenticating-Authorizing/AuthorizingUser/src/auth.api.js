const {response} = require('express')
const express = require('express')
const res = require('express/lib/response')
const config = require('../config')
const router = express.Router()
const oauthControl = require('./auth.controller')
router.get('/login',(request,response)=>{
    response.redirect(`https://github.com/login/oauth/authorize?client_id=${config.CLIENT_ID}`)
})

router.get('/callback', (req,res)=>{
    try {
        oauthControl.oauthProcessor(req.query.code,(err,data)=>{
            if(err){
                res.status(401).send(err)
            }
            res.redirect(`/welcome.html?token=${data}`)
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

module.exports = router