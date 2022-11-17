
var express = require('express')
const routelogin = require('./api/login.tsx')
const routehome = require('./api/home.tsx')
const app = express()

async function incio(){
    const database = require('./db.tsx');
    const tabelas = require('./tabelas.tsx');
    await database.sync();
    
}
incio()
app.use(express.json({ extended: false }))
app.use('/api/login', routelogin)
app.use('/api/home', routehome)

const Port = process.env.PORT ||8080;
app.listen(Port, () => console.log("Servidor rodando na porta "+Port))

