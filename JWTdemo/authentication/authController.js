const userService = require('../Users/userService')
const authService = require('./authService')

function registerUser(userData,done){
    userService.findUser(userData.email,(err,result)=>{
        if(err){
            done(err)
        }
        else if(result){
            done(result)
        }
        else{
            userService.registerUser(userData,done)
        }
    })
}

function loginUser({email,password},done){
    userService.findUser(email, (err,found)=>{
        if(err){
            done(err)
        }
        else{
            if(found){
                const userVerified = authService.verifyUser({email, password}, found)
                if (userVerified){
                    const jwtToken = authService.createJWR(found)
                    done(undefined,jwtToken)
                }
                else{
                    done("User not verified.")
                }
            }
            else{
                done({error: "User not found"})
            }
        }

    })
}

module.exports = {registerUser, loginUser}