const express = require('express')
const app = express()
const pg = require('pg')

const HOST = "0.0.0.0"
const PORT = "8080"

listaClientes = [
    {
        nome: 'Maria',
        fone: '123456',
        email: 'maria@email.com'
    },
    {
        nome: 'Maria',
        fone: '123456',
        email: 'maria@email.com'
    }
]

const pool = new pg.Pool({
    user: 'postgres',
    password: '628597',
    database: 'postgres',
    host: 'meubanco',
    port: 5432
})

app.get('/conectar', (req, res) => {
    pool.connect((err, client) => {
        if (err) {
            res.status(401).send({ mensagem: "Conexão não permitida" })
        }
        res.status(200).send({ mensagem: "Conectado" })
    })
})

app.get('/', (req, res) => {
    res.status(200).send({ mensagem: "Oláaaaa!" })
})

app.get('/clientes', (req, res) => {
    res.status(200).send(listaClientes)
})

app.listen(PORT, () => {
    console.log(`Servidor em execução na URL http://${HOST}:${PORT}`)
})