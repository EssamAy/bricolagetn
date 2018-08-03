const Config = require('../config');
console.log(Config);
const Sequelize = require('sequelize');
const sequelize = new Sequelize(Config.database.name, Config.database.user, Config.database.password,
 {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  define: {
    timestamps: false
}

})

/*
sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch(err => {
  console.error('Unable to connect to the database:', err);
});
*/

module.exports = {sequelize , Sequelize} ;