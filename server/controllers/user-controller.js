var userModel = require("../models/user-model");

const userController = {
    addUser : function (firstName,lastName) {
        var userInstance =  userModel.build({
            firstName: 'First user from Api   ',
            lastName: 'One'
          });

          userInstance.save();
          console.log("New user Added");
          return {"message" : "user added"}
    },
    getAllUsers : function (){
        userModel.findAll().then(users => {
            console.log(users);
            return users ;
        })
    }
}



module.exports = userController ;