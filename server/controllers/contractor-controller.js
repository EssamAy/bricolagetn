var contractorModel = require("../models/contractor-model");
var phoneNumberModel = require("../models/phonenumber-model");

exports.getUsers = function (req, res) {
    contractorModel.findAll().then(function (collection) {
    res.status(200);
    res.send({listContrators: collection});
  });
};

exports.createUser = function (req, res, next) {
  //var userData = req.body;

  // Type of data to send
/*
  {
    "contractor": {
        "name": "req.body.name",
        "nickname": "req.body.nickname",
        "password": "req.body.password",
        "mail": "req.body.mail",
        "job": "req.body.job",
        "domain": "req.body.domain",
        "description": "req.body.description",
        "adress": "req.body.adress",
        "image": "req.body.image",
        "city": "req.body.city",
        "phoneNumbers": [
            {
                "phone_number": 9265665
            },
            {
                "phone_number": 6565658656
            },
            {
                "phone_number": 5665656
            }
        ]
    }
}
 */
  var userData = {
          name: req.body.name,
          password: req.body.password,
          mail: req.body.mail,
          job: req.body.job,
          domain: req.body.domain,
          description: req.body.description,
          adress: req.body.adress,
          image: req.body.image,
          city: req.body.city,
          phoneNumbers: req.body.phoneNumbers
        }
contractorModel.build(userData, {
  include: [{
  model: phoneNumberModel,
  as: 'phoneNumbers'
  }]}).save()
            .then(function (user) {
       res.status(200);
       return res.send({newContractor: userData});
    }).catch(function (err) {
       res.status(400);
       return res.send({reason: "Error"});
    });
}

exports.getUserById = function (req, res) {
  userModel.find({where: {id_contractor: req.params.id}}).then(function (Contractor) {
    res.status(200);
    res.send({"Contractor": Contractor});
  }).catch(function () {
    res.status(400);
    res.send({reason: "Error"});
  });;
};

exports.deleteUser = function (req, res) {
  userModel.destroy({where: {id_contractor: req.params.id}})
    .then(function () {
      res.status(200);
      res.send({msg : "user succeffully deleted"});
    })
    .catch(function () {
      res.status(400);
      res.send({reason: "Error"});
    });
};


exports.updateUser = function (req, res) {
    var userData = {
      name: req.body.name,
      nickname: req.body.nickname,
      password: req.body.password,
      mail: req.body.mail,
      job: req.body.job,
      domain: req.body.domain,
      description: req.body.description,
      adress: req.body.adress,
      image: req.body.image,
      city: req.body.city
    }
  contractorModel.build(userData).save()
  .then(function (Contractor) {
  res.status(200);
  return res.send({msg: "Contractor updated"});
  }).catch(function () {
  res.status(400);
  return res.send({reason: "Error"});
  });
};
