const getUser = (req, res) => {
    const user = {id: 1, name: "Maria"}
    res.json(user)
}

export default getUser