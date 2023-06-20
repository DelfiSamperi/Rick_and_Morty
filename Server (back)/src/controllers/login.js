const users = require('../utils/users');

const login = (req,res) => {
    const { email, password } = req.query;
    if(email === users.email && password === users.password) {
        res.status(200).json({access: true})
    } else {
        res.status(404).json({access: false})
    }
    /*
    const userFound = users.find((user)=> user.email === email && user.password === password)
    userFound ? res.status(200).json() : res.status(404).json({access: false})
    */
}

module.exports = { login };