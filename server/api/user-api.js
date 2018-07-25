const router = require('express').Router();
var userController = require("../controllers/user-controller");

router.get('/users',(req,res,next)=>{


    var msg = userController.getUsers() ;

    console.log(msg+"hey");
    /*
users => {
    res.status(200);
    res.send(users);
  }).catch(err =>{
    throw err;
  })    
  */
});


// app.get('/users', userController.getUsers);
/*app.get('/api/users/:id', userController.getUserById);
app.post('/api/users', userController.createUser);
app.delete('/api/users:/id', userController.deleteUser);
// app.put('/api/users:/id', userController.updateUser);
*/

module.exports = router ;