import user from "../../models/userModels.js"

const updateUser = async (req, res) => {
    try{
        const [result] = await user.update(req.body)
        if(result.affectedRows === 1) {
            res.status(200).json({message: `User id: ${req.body.id} Updated Successfully`,
            user: {...req.body}
            // {...req.body} -> array que exibe todos os dados que deram certo
        })
        } else {
            res.status(404).json({message: `User ${req.body.id} Not Found`})
        }
    } catch(err) {
        console.log(err)
        res.status(500).json({message: 'Server Error'})
    }
}

export default updateUser