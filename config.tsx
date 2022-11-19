require('dotenv').config();
const con = {
    dialect:process.env.DIALECT,
    host:process.env.HOST,
    port:process.env.PORTA,
    database:process.env.DATABASE,
    username:process.env.USER,
    password:process.env.PASSWORD
}
module.exports = con