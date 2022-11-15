const config = require('./config')
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config);

module.exports = sequelize
