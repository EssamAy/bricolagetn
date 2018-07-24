const router = require('express').Router();
var userController = require("../controllers/user-controller");

router.get('/users',(req,res,next)=>{

    userController.getUsers().then(function(users) {
        console.log(userController.getUsers());
    }).catch(function(err) {
        console.log(err)
    });

    /*
    console.log(userController.getUsers());
    res.end();
    */
});


// app.get('/users', userController.getUsers);
/*app.get('/api/users/:id', userController.getUserById);
app.post('/api/users', userController.createUser);
app.delete('/api/users:/id', userController.deleteUser);
// app.put('/api/users:/id', userController.updateUser);
*/

module.exports = router ;