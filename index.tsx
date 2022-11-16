const criar = require('./requests/criarUser.tsx')
const login = require('./requests/login.tsx')
async function teste (){
    try{
        const database = require('./db.tsx');
        const tabelas = require('./tabelas.tsx');
        await database.sync();
        var result = await login('lucirene', '123123123213')
        // sign with RSA SHA256
        console.log(result)

    }
    catch(error){
        console.log(error)
    }
}

teste()
