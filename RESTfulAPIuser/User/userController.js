const userSerivce = require('./userService')

const getUsers = function(done){
    userSerivce.getUsers(done)
}

const getUserById = function(userId,done){
    userSerivce.getUserById(userId,done)
}

const updateUserDetails= function(userId,userName,done){
    userSerivce.updateUserDetails(userId,userName,done)
}

module.exports = {getUsers,getUserById,updateUserDetails}