const userModel = require('../../DB/modelosMongo/userModel');
const { createHash } = require('../../utils/utils');
const multer =require('multer')




const getSign = (req, res) => {
    res.render('signup');
};



const postSign = async (req, res,next) => {
    const { email, password,name,adress,age,phone} = req.body;

    
    try {
        const user = {
        email,
        password: createHash(password),
        name,
        adress,
        age,
        phone
        };
        const createUser = new userModel(user);
        await createUser.save();
        
        res.redirect('/login');

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { getSign, postSign };
