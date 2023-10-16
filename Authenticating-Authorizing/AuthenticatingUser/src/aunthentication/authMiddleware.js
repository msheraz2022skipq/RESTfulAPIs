const jwt = require("jsonwebtoken")
const config = require('../../config')

const verifyToken=(req,res,next)=>{
    const token = req.headers["authorization"]
    if (!token){
        return res.status(403).send("A token is required for authentication")
    }

    try {
        const decoded = jwt.verify(token,config.AUTH_SECRET);
        req.claims = decoded
    } catch (error) {
        return res.status(401).send("Invalid Token...")
    }
    return next()
}

module.exports = verifyToken;