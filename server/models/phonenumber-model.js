const db = require ('../database/connection.js');


// phoneNumber model
const phoneNumber = db.sequelize.define('phoneNumber', {
  phone_number: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: false,
  }
});




  //({force: true})
 db.sequelize.sync({
  force: true,
    logging : console.log}
)

 module.exports =  phoneNumber  ;