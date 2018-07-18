const db = require ('../database/connection.js');


// USer model
  const User = db.sequelize.define('user', {
    firstName: {
      type: db.Sequelize.STRING
    },
    lastName: {
      type: db.Sequelize.STRING
    }
  });

 db.sequelize.sync({
    logging : console.log}
)

 module.exports =  User  ;