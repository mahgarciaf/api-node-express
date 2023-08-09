import express from 'express'

const router = express.Router()

// aplicação de exemplo
//É possível usar uma mesma rota ("/user") mas com aplicações diferentes

router.get('/', (req, res) => {
    const user = [
        {id: 1, name: "Mari"},
        {id: 2, name: "Kauan"},
        {id: 3, name: "Ale"}
    ]

    res.json(user)
})

router.post('/', (req, res) => {
    // pegar os dados
    res.json({message: "Usuário criado com sucesso"})
})

router.put('/', (req, res) => {
    // atualizar os dados / update
    res.json({message: "Usuário alterado com sucesso"})
})

router.delete('/', (req, res) => {
    // apaga os dados
    res.json({message: "Usuário deletado com sucesso"})
})

export default router