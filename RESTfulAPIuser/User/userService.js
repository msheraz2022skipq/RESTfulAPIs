const userDAO = require('./userDAO')

const getUsers=function(done){
    userDAO.getUsers(done)
}

const getUserById = function(userId,done){
    userDAO.getUserById(userId,done)
}

const updateUserDetails= function(userId,userName,done){
    userDAO.updateUserDetails(userId,userName,done)
}

module.exports = {getUsers,getUserById,updateUserDetails}