// const express = require('express') -> modo antigo de importar
import express from 'express'
import {PORT} from './config.js'
import userRoute from './router/userRoute.js'
import productRout from './router/productRoute.js'
import logger from './middlewares/logger.js'

const api = express()

// req -> requisição
// res -> resposta


// usando o middleware em todas as rotas
api.use(logger)


api.get('/', (req, res)=>{   
    res.json({message: "Bem-vindo a API"})
})

api.use('/user', logger, userRoute)
api.use('/product', productRout)


// aplicação de exemplo
//É possível usar uma mesma rota ("/user") mas com aplicações diferentes


//aplicando o middleware em uma rota específica
api.all('/*', logger, (req, res) => {
    // qualquer outra rota que não tenha sido configurada previamente
    // erro 404
    res.json({message: "Rota não encontrada!"})
})



// o listen liga o servidor
// o call back é para mandar a mensagem no promt de comando
api.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`)
})