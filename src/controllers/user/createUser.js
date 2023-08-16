import user from '../../models/userModels.js'

const createUser = async (req, res) => {
    try {
        const user = req.body
        const res = await user.create(user)
        console.log(res)
        const [result] = resif(result.affectedRows === 1) {
            res.status(201).json({message: 'User Created',
                user:{
                    id: result.
                }
            })
        }
    } catch (error) {
        console.error(err)
        res.status(500).json({message: 'Server error'})
    }
}

export default createUser