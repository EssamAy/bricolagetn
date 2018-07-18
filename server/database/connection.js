const Sequelize = require('sequelize');
const sequelize = new Sequelize('bricolage_test', 'root', '',
 {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
});


module.exports = {sequelize , Sequelize} ;