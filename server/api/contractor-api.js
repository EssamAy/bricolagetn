const router = require('express').Router();
var userController = require("../controllers/user-controller");

var userController = require("../controllers/contractor-controller");



router.get('/contractors', userController.getUsers);
router.get('/contractors/:id', userController.getUserById);
router.post('/contractors', userController.createUser);
router.delete('/contractors/:id', userController.deleteUser);
router.put('/contractors/:id', userController.updateUser);

module.exports = router ;