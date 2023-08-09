import express from 'express'

const router = express.Router()

// aplicação de exemplo
//É possível usar uma mesma rota ("/product") mas com aplicações diferentes

router.get('/', (req, res) => {
    const dados = req.body
    res.json({
        message: "Produtos:",
        dados: dados})
})

router.post('/', (req, res) => {
    // pegar os dados / create
    const dados = req.body
    console.log(dados.nome)
    
    res.json({
        message: "Produto criado com sucesso",
        dados: dados})
})

router.put('/', (req, res) => {
    // atualizar os dados / update
    const dados = req.body
    res.json({
        message: "Produto alterado com sucesso",
        dados: dados})
})

router.delete('/', (req, res) => {
    // apaga os dados
    const dados = req.body
    res.json({
        message: "Produto deletado com sucesso",
        dados: dados})
})

export default router