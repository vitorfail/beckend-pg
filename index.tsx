
const express = require('express')
const routelogin = require('./api/login')
const app = express()

app.use(express.json({ extended: false }))
app.use('/api/cadastro', routelogin)

const Port = process.env.PORT ||8080;
app.listen(Port, () => console.log("Servidor rodando na porta "+Port))

