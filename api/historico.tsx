const express3 = require('express');
const routas = express3.Router();
var Check3 = require('./checkUser.tsx')
const tablelas = require('../tabelas.tsx') 
var jwt = require('jsonwebtoken');

async function historico(req){
    try{
        var autorization = jwt.decode(req.headers.authorization.replace('Bearer ', ''))
        var resultado = await tablelas.tabela_contas.findAll({
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

routas.post('/', async (req, res) =>{
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