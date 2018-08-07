const db = require ('../database/connection.js');
const phoneNumberModel = require ('./phonenumber-model.js');


// contractor  model
  const contractorModel = db.sequelize.define('contractor', {
    id_contractor: {
      type: db.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: db.Sequelize.STRING
    },
    nickname: {
      type: db.Sequelize.STRING
    },
    password: {
      type: db.Sequelize.STRING
    },
    mail: {
      type: db.Sequelize.STRING
    },
    job: {
      type: db.Sequelize.STRING
    },
    domain: {
      type: db.Sequelize.STRING
    },
    description: {
      type: db.Sequelize.TEXT
    },
    adress: {
      type: db.Sequelize.TEXT
    },
    city: {
      type: db.Sequelize.STRING
    },
    image: {
      type: db.Sequelize.STRING
    },
    createdAt: {
      type: db.Sequelize.DATE,
       defaultValue: db.Sequelize.NOW
    }
  });

  contractorModel.hasMany(phoneNumberModel ,{ as: 'phoneNumber', foreignKey:{name : 'id_contractor' ,allowNull : false} });
  phoneNumberModel.belongsTo(contractorModel , {foreignKey: {name : 'id_contractor', onDelete: "CASCADE"} });

  //({force: true})
 db.sequelize.sync({
  force: true,
      logging : console.log}
)

 module.exports =  contractorModel  ;