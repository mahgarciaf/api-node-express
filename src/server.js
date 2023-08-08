// const express = require('express') -> modo antigo de importar
import express from 'express'
import {PORT} from './config.js'

const api = express()

// req -> requisição
// res -> resposta
api.get('/', (req, res) => {
    res.json({message: "Bem vindo a API"})
})


// aplicação de exemplo
//É possível usar uma mesma rota ("/users") mas com aplicações diferentes
api.get('/users', (req, res) => {
    const users = [
        {id: 1, name: "Mari"},
        {id: 2, name: "Kauan"},
        {id: 3, name: "Ale"}
    ]

    res.json(users)
})

api.post('/users', (req, res) => {
    // pegar os dados
    res.json({message: "Usuário criado com sucesso"})
})

api.put('/users', (req, res) => {
    // atualizar os dados / update
    res.json({message: "Usuário alterado com sucesso"})
})

api.delete('/users', (req, res) => {
    // apaga os dados
    res.json({message: "Usuário deletado com sucesso"})
})

api.all('/*', (req, res) => {
    // qualquer outra rota que não tenha sido configurada previamente
    res.json({message: "Rota não encontrada!"})
})



// o listen liga o servidor
// o call back é para mandar a mensagem no promt de comando
api.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})