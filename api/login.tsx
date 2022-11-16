const criar = require('../requests/criarUser.tsx')
const login = require('../requests/login.tsx')
const express1 = require('express');
const router = express1.Router(); 

async function teste(user, pass){
    try{
        const database = require('./db.tsx');
        const tabelas = require('./tabelas.tsx');
        await database.sync();
        var result = await login('lucirene', '123123123213')
        // sign with RSA SHA256
        return result
    }
    catch(error){
        return null
    }
}
router.post('/', async (req, res) =>{
    try{
        var resultado = await teste(req.body.user, req.body.pass)
        
        res.status(200).send(resultado)
    }
    catch(error){
        res.status(200).send(null)
    }
})
module.exports = router;