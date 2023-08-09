// const express = require('express') -> modo antigo de importar
import express from 'express'
import {PORT} from './config.js'
import userRoute from './router/userRoute.js'
import productRout from './router/productRoute.js'

const api = express()

// req -> requisição
// res -> resposta

api.get('/', (req, res)=>{   
    res.json({message: "Bem-vindo a API"})
})

api.use('/user', userRoute)
api.use('/product', productRout)


// aplicação de exemplo
//É possível usar uma mesma rota ("/user") mas com aplicações diferentes


api.all('/*', (req, res) => {
    // qualquer outra rota que não tenha sido configurada previamente
    res.json({message: "Rota não encontrada!"})
})



// o listen liga o servidor
// o call back é para mandar a mensagem no promt de comando
api.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})