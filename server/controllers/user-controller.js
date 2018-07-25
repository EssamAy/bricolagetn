var userModel = require("../models/user-model");

exports.getUsers = function (req, res) {

  // userModel.findAll().then(function (collection) {
  // //  res.status(200);
  //   res.send({listUsers: collection});
  // });

  userModel.findAll().then(users => {
//    res.status(200);
    res.send(users);
  }).catch(err =>{
    throw err;
  })

/**/
};

exports.createUser = function (req, res, next) {
  //var userData = req.body;

  var userData = {
      name: 'My name',
      password: 'pwd',
      mail: 'mail@gmail.com',
      job: 'my job',
      domain: 'job domain',
      phone_number: '51234567',
      description: 'lorem ipsum saret log t integer auto increment name ',
      adress: 'My aAdres is a small adress you can check it now ',
      city: 'TUnis'
    }
  userModel.build(userData).save()
  .then(function (user) {
  res.status(200);
  return res.send({newUser: userData});
  }).catch(function () {
  res.status(400);
  return res.send({reason: "Error"});
  });

  /*
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
    */
};

exports.getUserById = function (req, res) {
  userModel.find({where: {id_user: req.params.id}}).then(function (user) {
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
