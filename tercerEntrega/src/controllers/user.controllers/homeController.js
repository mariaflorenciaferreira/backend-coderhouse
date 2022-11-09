const userModel = require('../../DB/modelosMongo/userModel');

const getHome = async (req, res) => {
    console.log(req.session);
    res.render('home');
};

//Para desloguear al usuario
const  logout= (req, res)=>{

    if (req.isAuthenticated()){
        req.logout()
    }
    res.status(200).json({msg: `Success Logout`})
    res.render('login');
}

module.exports = {getHome, logout}
