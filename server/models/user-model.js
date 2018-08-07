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
    role: {
      type: db.Sequelize.STRING
    },
    createdAt: {
      type: db.Sequelize.DATE,
       defaultValue: db.Sequelize.NOW
    }
  });


  //({force: true})
 db.sequelize.sync({
  force: true,
      logging : console.log}
)

 module.exports =  User  ;