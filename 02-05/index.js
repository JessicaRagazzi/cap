const express = require('express');
//const res = require('express/lib/response');
const app = express();

var dados = require('/db')

app.use(express.urlencoded({ extended: false })) //USO DO MIDDLEWARE
app.use(express.json())

app.get('/', (req, res) => {  //<= PARA CRIAR UMA ROTA 
    res.send("Olá, mundo!")
})

app.get('/contatos', (req, res) => { //=< PARA CRIAR OUTRA ROTA 
    res.send("Serviço de contato")
})

app.get('/contatos/:idcontato', (req, res) => {
    let idcontato = req.params.idcontato
    res.status(200).send(
        { idcontato: idcontato })
})

/*app.post('/contatos', (req, res) => { //<= PARA CRIAR UM "BANCO DE DADOS"
    res.status(201).send(
        {
            id: '1',
            nome: 'Maria',
            fone: '123-485',
            email: 'maria@gmail.com'
        })
})*/

/*app.post('/produtos', (req, res) => { //TRATANDO OS DADOS 

    res.status(202).send({
        id: req.body.id,
        descricao: req.body.descricao,
        preco: req.body.preco,
        estoque: req.body.estoque,
       
    })
})*/

//ESSES NÚMEROS (200, 204) PODEM SER CONSULTADOS, PESQUISAR POR CÓDIGO DE STATUS DE RESPOTA HTTP

/**Clientes */
app.get('/clientes', (req, res) => {
    res.status(200).send(dados)
})

app.get('/clientes/:idcliente', (req, res) => {
    let idcliente = req.params.idcliente
    let clienteretornar = {}
    for (let i of dados) {
        if (i.id == idcliente) {
            clienteretornar = i
        }
    }
    res.status(200).send(clienteretornar)
})

app.post('/clientes', (req, res) => {
    let ob = {
        id: req.body.id,
        nome: req.body.nome,
        fone: req.body.fone,
        limiteCredito: req.body.limiteCredito
    }
    dados.push(ob)
    res.status(201).send(ob)
})

app.delete('/clientes/:idcliente', (req, res) => {
    let idcliente = req.params.idcliente
    let posicao = 0
    for (let i of dados) {
        if (i.id == idcliente) {
            break;
        }
        posicao++;
    }
    dados.splice(posicao, 1)
    res.status(204).send();
})

app.put('/clientes/:idcliente', (req, res) => {
    let idcliente = req.params.idcliente
    let clienteAlterado = {}
    for (let i of dados) {
        if (i.id == idcliente) {
            i.nome = req.body.nome
            i.fone = req.body.fone
            i.limiteCredito = req.body.limiteCredito
            clienteAlterado = i
        }
    }
    res.status(200).send(clienteAlterado)
})

app.listen(8081, () => console.log('Aplicação em execução na url http://localhost:8081'))