const t = require('../tabelas.tsx')
var jwt = require('jsonwebtoken')
const expresso = require('express');
const Sq = require('sequelize')
const routa = expresso.Router(); 
var Check2 = require('../api/checkUser.tsx')

async function pagamento(token, user, valor){
    var id = jwt.decode(token)
    var result = await t.tabela_contas.findAll({
        where:{
            id:(id.id)
        }
    })
    var caixa = result[0].dataValues.balance
    console.log(caixa)
    console.log(valor)
    if(parseFloat(caixa) < parseFloat(valor)){
        return 'MONEY-LOW'
    }
    else{
        var destino = await t.tabela_user.findAll({
            where:{
                username:(user)
            }
        })
        if(destino.length > 0){
            try{
                var data = new Date()
                console.log(data)
                await t.tabela_contas.increment(
                    { 
                        balance:-valor
                    },
                    {
                        where:{
                            id:id.id
                        }
                    }
                )
                await t.tabela_contas.increment(
                    { 
                        balance:valor
                    },
                    {
                        where:{
                            id:destino[0].dataValues.id
                        }
                    }
                )
                t.tabela_trf.create({
                    debitedAccountId:id.id,
                    creditedAccountId:destino[0].dataValues.id,
                    value:valor,
                    createdAt:String(data)
                })
                return 1
            }
            catch(error){
                return 2;
            }
        }
        else{
            return 'Not found';
        }
    }

};
routa.post('/', async (req, res) =>{
    try{
        var checkando = await Check2(req)
        if(checkando){
            var resultado = await pagamento(req.headers.authorization.replace('Bearer ', ''), req.body.userpay, req.body.valor)
            res.status(200).send(JSON.stringify({resultado}))    
        }
        else{
            res.status(200).send("USER_ERROR")
        }
    }
    catch(error){
        res.status(200).send(null)
    }
})
module.exports = routa;