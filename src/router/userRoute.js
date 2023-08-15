import express from 'express'
import listUsers from '../controllers/user/listUsers.js'
import getUser from '../controllers/user/getuser.js'

const router = express.Router()

// aplicação de exemplo
//É possível usar uma mesma rota ("/user") mas com aplicações diferentes

router.get('/', (req, res) => {
    const dados = req.body
    res.json({
        message: "Usuários:",
        dados: dados})
})

router.get('/list', listUsers)

router.get('/user', getUser)

router.post('/', (req, res) => {
    // pegar os dados / create
    const dados = req.body
    console.log(dados.nome)
    
    res.json({
        message: "Usuário criado com sucesso",
        dados: dados})
})

router.put('/', (req, res) => {
    // atualizar os dados / update
    const dados = req.body
    res.json({
        message: "Usuário alterado com sucesso",
        dados: dados})
})

router.delete('/', (req, res) => {
    // apaga os dados
    const dados = req.body
    res.json({message: "Usuário deletado com sucesso",
    dados: dados})
})

export default router