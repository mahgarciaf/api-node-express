const deleteUser = (req, res) => {
    // apaga os dados
    const dados = req.body
    res.json({message: "Usuário deletado com sucesso",
    dados: dados})
}

export default deleteUser