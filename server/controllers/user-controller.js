var user = require("../models/user-model");


function getUserById(id) {
    return  user[id] ;
}

module.exports = getUserById ;