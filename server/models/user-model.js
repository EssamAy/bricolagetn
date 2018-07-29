const db = require ('../database/connection.js');
const phoneNumber = require ('./phonenumber-model.js');


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

  User.hasMany(phoneNumber/* ,
  {
    foreignKey: "user_id",
    sourceKey: "user_id"
  } */);

    //Association with User model ==> user has many phone numbers
    phoneNumber.belongsTo(User/*,
      {
        foreignKey: {
          name : "user_id",
        allowNull : false,
        primaryKey: true,
      },
        targetKey: "user_id",
        onDelete: "CASCADE",
      }*/);

  //({force: true})
 db.sequelize.sync({
  force: true,
    logging : console.log}
)

 module.exports =  User  ;