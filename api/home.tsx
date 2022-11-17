const login1 = require('../requests/login.tsx')
const express2 = require('express');
const router2 = express2.Router();
const Check = require('./checkUser.tsx') 

async function home(user, pass){
    try{
        var result = await login(user, pass)
        // sign with RSA SHA256
        return result
    }
    catch(error){
        return 'nada'
    }
}
function testando(){
    return 0
}
router2.post('/', async (req, res) =>{
    try{
        var checando = await Check(req)
        if(checando){
            var resultado = await teste(req.body.user, req.body.pass)
            res.status(200).send(resultado)    
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