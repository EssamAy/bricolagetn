const Sequelize = require('sequelize');
const sequelize = new Sequelize('bricolage_test', 'root', '',
 {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  define: {
    timestamps: false
}

});


module.exports = {sequelize , Sequelize} ;