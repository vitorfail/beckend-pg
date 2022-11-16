const criar = require('./requests/criarUser.tsx')
async function teste (){
    try{
        const database = require('./db.tsx');
        const tabelas = require('./tabelas.tsx');
        await database.sync();
        //var result = await criar('lucirene', '123123123213')
        //console.log(result)

    }
    catch(error){
        console.log(error)
    }
}

teste()
