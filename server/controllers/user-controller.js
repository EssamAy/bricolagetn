var user = require("../models/user-model");


  // Table created
  var userInstance =  user.build({
    firstName: 'First user in da controller  ',
    lastName: 'One'
  })

  userInstance.save()

user.findAll().then(users => {
    console.log(users)
  })






module.exports = user ;