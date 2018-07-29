const db = require ('../database/connection.js');
const User = require ('./user-model.js');


// phoneNumber model
  const phoneNumber = db.sequelize.define('phoneNumber', {
    phone_number: {
      type: db.Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: false,
    },
    user_id: {
      type: db.Sequelize.INTEGER,
      primaryKey: true
    }
  });



  //({force: true})
 db.sequelize.sync({
  force: true,
    logging : console.log}
)

 module.exports =  phoneNumber  ;