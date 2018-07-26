var userModel = require("../models/user-model");

exports.getUsers = function (req, res) {
  userModel.findAll().then(function (collection) {
    res.status(200);
    res.send({listUsers: collection});
  });
};

exports.createUser = function (req, res, next) {
  //var userData = req.body;
  var userData = {
          name: req.body.name,
          password: req.body.password,
          mail: req.body.mail,
          job: req.body.job,
          domain: req.body.domain,
          phone_number: req.body.phone_number,
          description: req.body.description,
          adress: req.body.adress,
          image: req.body.image,
          city: req.body.city
        }
  userModel.build(userData).save()
    .then(function (user) {
       res.status(200);
       return res.send({newUser: userData});
    }).catch(function () {
       res.status(400);
       return res.send({reason: "Error"});
    });
}

exports.getUserById = function (req, res) {
  userModel.find({where: {id_user: req.params.id}}).then(function (user) {
    res.status(200);
    res.send({"user": user});
  }).catch(function () {
    res.status(400);
    res.send({reason: "Error"});
  });;
};

exports.deleteUser = function (req, res) {
  userModel.destroy({where: {id_user: req.params.id}})
    .then(function () {
      res.status(200);
      res.send({msg : "user succeffully deleted"});
    })
    .catch(function () {
      res.status(400);
      res.send({reason: "Error"});
    });
};
