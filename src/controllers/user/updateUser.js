const updateUser = (req, res) => {
    // atualizar os dados / update
    const dados = req.body
    res.json({
        message: "Usuário alterado com sucesso",
        dados: dados})
}

export default updateUser