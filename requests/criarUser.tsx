const tabelas = require('../tabelas.tsx')
const md5 = require('md5');

module.exports = async function (user, pass){
    var result = await tabelas.tabela_user.findAll({
        where:{
            username:(user)
        }
    })
    if(result.length === 0){
        try{
            tabelas.tabela_contas.create({
                balance:100
            }).then(tabelas.tabela_user.create({
                username:(user),
                password:(md5(pass)),
            }))
            return 1;
        }
        catch(error){
            return 2;
        }
    }
    else{
        return 0;
    }
};