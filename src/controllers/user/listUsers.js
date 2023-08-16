import user from '../../models/userModels.js'

const listUsers = async (req, res) => {
    try {
        const result = await user.list()
        const [rows, fields] = result

        if (rows.length === 0) {
            res.status(404).json({message: 'Users not found'})
        } else {
            res.json(rows)
        }
    } catch (error) {
        console.error(err)
        res.status(500).json({message: 'Server error'})
    }
}

export default listUsers