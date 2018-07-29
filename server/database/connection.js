const Sequelize = require('sequelize');
const sequelize = new Sequelize('bricolage_test', 'root', '',
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