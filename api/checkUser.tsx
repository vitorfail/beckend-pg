const tabelas2 = require('../tabelas.tsx')
var jwt = require('jsonwebtoken');
var decode = require('jwt-decode')
require('dotenv').config();

module.exports = async function (header){
    var h = header.headers
    var verity = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub21lIjoibHVjaXJlbmUiLCJpYXQiOjE2Njg2NDgzMTQsImV4cCI6MTY2ODY0ODYxNH0.A-KHBaahZE86Qm4j16uIcRKMVwa1dcenQ0jbCPN7rkU', process.env.PRIVATE_KEY)
    console.log(verity)
    return false
};
