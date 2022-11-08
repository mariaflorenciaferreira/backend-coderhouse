const userModel = require('../../DB/modelosMongo/userModel');
const { createHash } = require('../../utils/utils');

const getSign = (req, res) => {
    res.render('signup');
};


const postSign = async (req, res) => {
    const { email, password,nombreCompleto,direccion,edad,telefono } = req.body;
    
    try {
        const user = {
        email,
        password: createHash(password),
        nombreCompleto,
        direccion,
        edad,
        telefono
        };
        const createUser = new userModel(user);
        await createUser.save();
        
        res.redirect('/login');

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { getSign, postSign };
