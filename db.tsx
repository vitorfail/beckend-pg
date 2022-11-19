const config = require('./config.tsx')
const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = sequelize
