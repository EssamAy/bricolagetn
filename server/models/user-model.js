const db = require ('../database/connection.js');


// USer model
  const User = db.sequelize.define('user', {
    id_user: {
      type: db.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
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
    phone_number: {
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

  //({force: true})
 db.sequelize.sync({
    logging : console.log}
)

 module.exports =  User  ;