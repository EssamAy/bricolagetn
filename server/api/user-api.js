var userController = require("../controllers/user-controller");
const express = require('express');
var router = express.Router();


router.get('/users', userController.getUsers);
/*app.get('/api/users/:id', userController.getUserById);
app.post('/api/users', userController.createUser);
app.delete('/api/users:/id', userController.deleteUser);
// app.put('/api/users:/id', userController.updateUser);
*/

module.exports = router ;