const createUser = (req, res) => {
    // pegar os dados / create
    const dados = req.body
    console.log(dados.nome)
    
    res.json({
        message: "Usuário criado com sucesso",
        dados: dados})
}

export default createUser