// const express = require('express') -> modo antigo de importar
import express from 'express'
import {PORT} from './config.js'

const api = express()

// req -> requisição
// res -> resposta
api.get('/', (req, res) => {
    res.json({message: "Bem vindo a API"})
})

// o listen liga o servidor
// o call back é para mandar a mensagem no promt de comando
api.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})