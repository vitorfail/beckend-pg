const express2 = require('express');
const router2 = express2.Router();
const Check = require('./checkUser.tsx')
const table = require('../tabelas.tsx') 
var jwt = require('jsonwebtoken');


async function check_saldo(req){
    try{
        var autorization = jwt.decode(req.headers.authorization.replace('Bearer ', ''))
        var resultado = await table.tabela_contas.findAll({
            where:{
                id:autorization.id
            }
        })
        if(resultado.length == 0){
            return 0
        }
        else{
            return parseFloat(resultado[0].dataValues.balance)
        }
    }
    catch(error){
        return 'nada'
    }
}
async function check_retiradas(req){
    try{
        var autorization = jwt.decode(req.headers.authorization.replace('Bearer ', ''))
        var resultado = await table.tabela_trf.findAll({
            where:{
                id:autorization.id,
                debitedAccountId:autorization.id
            }
        })
        if(resultado.length == 0){
            return 0
        }
        else{
            return parseFloat(resultado)
        }
    }
    catch(error){
        return 'nada'
    }
}
async function check_entradas(req){
    try{
        var autorization = jwt.decode(req.headers.authorization.replace('Bearer ', ''))
        var resultado = await table.tabela_trf.findAll({
            where:{
                creditedAccountId:autorization.id
            }
        })
        if(resultado.length == 0){
            return 0
        }
        else{
            return parseFloat(resultado)
        }
    }
    catch(error){
        return 'nada'
    }
}
async function check_nome(req){
    try{
        var autorization = jwt.decode(req.headers.authorization.replace('Bearer ', ''))
        var resultado = await table.tabela_user.findAll({
            where:{
                id:autorization.id
            }
        })
        if(resultado.length == 0){
            return 0
        }
        else{
            return resultado[0].dataValues.username
        }
    }
    catch(error){
        return 'nada'
    }
}

router2.post('/', async (req, res) =>{
    try{
        var checando = await Check(req)
        if(checando == true){
            var saldo = await check_saldo(req)
            var saidas = await check_retiradas(req)
            var entradas = await check_entradas(req)
            var nome = await check_nome(req)
            var score = 100
            res.status(200).send(JSON.stringify({score:score, saldo: saldo, saidas:saidas, entradas: entradas, nome:nome}))    
        }
        else{
            res.status(200).send("USER_ERROR")
        }
    }
    catch(error){
        res.status(200).send(null)
    }
})
module.exports = router2;