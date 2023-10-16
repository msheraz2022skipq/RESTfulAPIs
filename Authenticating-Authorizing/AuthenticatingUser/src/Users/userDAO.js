const users = require('./users.json')
const fs = require('fs')

function findUser(email,done){
    const fetchedUser = users.filter(user=>user.email === email)[0]
    done(undefined,fetchedUser)
}

function registerUser(userDetails, done){
    users.push(userDetails)
    fs.writeFileSync('./Users/users.json', JSON.stringify(users))
    done(undefined,userDetails)
}

module.exports={findUser,registerUser}