const criar = require('../requests/criarUser.tsx')
const login = require('../requests/login.tsx')
const express1 = require('express');
const router = express1.Router(); 


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