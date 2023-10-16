const userDAO = require('./userDAO')

function findUser(email,done){
    userDAO.findUser(email,done)
}

function registerUser(userDetails,done){
    userDAO.registerUser(userDetails,done)
}

module.exports = {findUser, registerUser}