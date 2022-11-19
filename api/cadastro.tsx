const tabelas = require('../tabelas.tsx')
const md5 = require('md5');
const expres = require('express');
const rout = expres.Router(); 

async function criar(user, pass){
    var result = await tabelas.tabela_user.findAll({
        where:{
            username:(user)
        }
    })
    if(result.length === 0){
        try{
            const resultado = await tabelas.tabela_contas.create({
                balance:100
            })
            tabelas.tabela_user.create({
                username:(user),
                password:(md5(pass)),
                accountId: resultado.id
            })
            return 1;
        }
        catch(error){
            return 2;
        }
    }
    else{
        return 'Not found';
    }
};

rout.post('/', async (req, res) =>{
    try{
        var resultado = await criar(req.body.user, req.body.pass)
        res.status(200).send(resultado)
    }
    catch(error){
        res.status(200).send(null)
    }
})
module.exports = rout;