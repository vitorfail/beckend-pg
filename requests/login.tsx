const tabelas1 = require('../tabelas.tsx')
const md51 = require('md5');
var jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async function (user, pass){
    try{
        var result = await tabelas1.tabela_user.findAll({
            where:{
                username:(user),
                password:(md51(pass))
            }
        })
        if(result.length === 0){
            return 'Not found'
        }
        else{
            var token = jwt.sign({ id:result[0].dataValues.id}, process.env.PRIVATE_KEY, { expiresIn: 300});
            return token;
        }    
    }
    catch{
        return 'nada'
    }
};
