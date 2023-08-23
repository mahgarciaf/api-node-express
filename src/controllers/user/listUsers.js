import user from '../../models/userModels.js'

const listUsers = async (req, res)=>{   
    try {
        const [rows, fields] = await user.list()
        if (rows.length === 0) {
            res.status(404).json({message: 'Users Not Found'})
        } else {
            res.json(rows)
        }
    } catch (err) {
        console.error(err)
        res.status(500).json({message: 'Server error'})
    }
}

export default listUsers