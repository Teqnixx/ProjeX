const postgre = require('../database')
const projexController = {
    // get all users
    getAll: async(req, res) => {
        try {
            const { rows } = await postgre.query("SELECT * FROM users")
            console.log(res)
            res.json({msg: "OK", data: rows})
        } catch (error) {
            res.json({msg: error.msg})
        }
    },
    
}

module.exports = projexController
