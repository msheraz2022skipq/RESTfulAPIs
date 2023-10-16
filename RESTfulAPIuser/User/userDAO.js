const fs = require('fs');

const getUsers = function(done){
    fs.readFile('User/users.json', (err, fileContent) => {
        if (err) {
            return done("Error occured while reading the file");
        }
        let userData = JSON.parse(fileContent);
        return done(undefined, userData);
    })
}

const getUserById=function(userId,done){
    fs.readFile('User/users.json',(err,fileContent)=>{
        if (err){
            return done("Error occured while reading the file")
        }
        let userData = JSON.parse(fileContent)
        const fetchUser = userData.filter(usr => parseInt(usr.userId)===parseInt(userId))
        if (!fetchUser){
            return done('No user for request ID')
        }
        return done(undefined,fetchUser)
    })
}

const updateUserDetails = function(userId,username,done){
    fs.readFile('User/users.json',(err,fileContent)=>{
        if(err){
            return done("Error occured while reading the file")
        }
        let userData = JSON.parse(fileContent)
        let index = userData.findIndex(usr=>usr.userId===parseInt(userId))
        if(index===-1){
            return done('No user available with this ID')
        }
        userData[index].userName = username
        fs.writeFile('User/users.json', JSON.stringify(userData), (err,updatedContent)=>{
            if(err){
                return done("ERROR occured while writing the file...")
            }
            return done(undefined, "Succefully updated the user details...")
        })

    })
}
module.exports = {getUsers,getUserById,updateUserDetails}