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


  // force: true will drop the table if it already exists
  db.sequelize.sync({
    logging : console.log}
).then(() => {
    // Table created
    var userInstance =  User.build({
      firstName: 'First user',
      lastName: 'Hancock'
    })

    userInstance.save()

  });





 module.exports =  User  ;