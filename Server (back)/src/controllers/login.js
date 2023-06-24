/*
const users = require('../utils/users');

const login = (req, res) => {
    const { email, password } = req.query; //viene en la URL
    /*
    if(email === users.email && password === users.password) {
        return res.status(200).json({access: true});
    } else {
        return res.status(404).json({access: false});
    }
*/ 
/*
    const userFound = users.find((user) => user.email === email && user.password === password)
    userFound
        ? res.status(200).json({ access: true })
        : res.status(404).json({ access: false })
};

module.exports = { login };
*/

//vinculado a la DATABASE
const { User } =require('../DB_connection');

const login = async (req,res) => {
    try {
        const { email, password } = req.query;
        if(!email || !password) return res.status(400).send('Faltan datos');
        
        const user = await User.findOne({were: {email}});
        if(!user) return res.status(404).send("Usuario no encontrado");

        return user.password === password 
        ? res.json({access: true})
        : res.status(403).send("Contraseña incorrecta")

    } catch (error) {
        return res.status(500).send(error.message)
    }
};

module.exports = { login };