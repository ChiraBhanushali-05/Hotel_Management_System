const { Sequelize } = require('sequelize');
const config = require("../config/config");

const sequelize = new Sequelize(config.DB_Name, config.DB_User, config.DB_Password, {
  host: config.DB_Host,
  dialect: 'mysql',
});

module.exports = sequelize; 
