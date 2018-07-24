var userModel = require("../models/user-model");

exports.getUsers = function (req, res) {
/*
  userModel.findAll().then(function (collection) {
  //  res.status(200);
    res.send(collection[0].id);
  });
*/
  return userModel.findAll({ raw: true });

/**/
};

exports.createUser = function (req, res, next) {
  //var userData = req.body;
  var userData = {
            firstName: 'First user from Api   ',
            lastName: 'One'
          }
  userModel.build(userData).save()
    .then(function (user) {
       res.status(200);
       return res.send({newUser: userData});
    }).catch(function () {
       res.status(400);
       return res.send({reason: "Error"});
    });
};

exports.getUserById = function (req, res) {
  userModel.find({where: {id: req.params.id}}).then(function (user) {
    res.status(200);
    res.send({"user": user});
  });
};

exports.deleteUser = function (req, res) {
  userModel.destroy({where: {id: req.params.id}})
    .then(function () {
      res.status(200);
      res.send({});
    })
    .catch(function () {
      res.status(400);
      res.send({reason: "Error"});
    });
};
