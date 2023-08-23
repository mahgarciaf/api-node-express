import user from '../../models/userModels.js'

const getUser = async (req, res) => {
    try{
        const [rows, fields] = await user.get(req.body.id)
        if (rows.length === 0) {
            res.status(404).json({message: 'Users Not Found'})
        } else {
            delete rows[0].pass
            res.json(rows[0])
            // posição 1da tabela -> indica os dados solicitados
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({message: 'Server Error'})
    }
}

export default getUser