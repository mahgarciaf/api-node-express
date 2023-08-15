const listUsers = (req, res) => {
    const users = [
        {id: 1, name: "João"},
        {id: 1, name: "Maria"},
        {id: 1, name: "José"}
    ]
    res.json(users)
}

export default listUser