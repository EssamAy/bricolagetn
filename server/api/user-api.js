const router = require('express').Router();
var userController = require("../controllers/user-controller");



router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.post('/newuser', userController.createUser);
router.delete('/deleteuser/:id', userController.deleteUser);
router.put('/updateuser/:id', userController.updateUser);

module.exports = router ;