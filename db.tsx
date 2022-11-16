const config = require('./config.tsx')
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config);

module.exports = sequelize
