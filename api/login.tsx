
const express1 = require('express');
const router = express1.Router();
const tabelas1 = require('../tabelas.tsx')
const md51 = require('md5');
var jwt = require('jsonwebtoken');
require('dotenv').config(); 

async function login (user, pass){
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


router.post('/', async (req, res) =>{
    try{
        var resultado = await login(req.body.user, req.body.pass)
        res.status(200).send(resultado)
    }
    catch(error){
        res.status(200).send(null)
    }
})
module.exports = router;