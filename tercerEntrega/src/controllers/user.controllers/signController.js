const userModel = require('../../DB/modelosMongo/userModel');
const { createHash } = require('../../utils/utils');
const multer =require('multer')



const getSign = (req, res) => {
    res.render('signup');
};


const storage=multer.diskStorage({
    destination: (req,_file,cb)=>{
        cb(null, 'uploads')
    },
    filename:(req,file,cb)=>{
        cb(null,`${Date.now() }-${file.originalname}`)
    }
})

const upload=multer({storage})


// const uploadFile= ('/uploadfile',upload.single('pic'),(req,res,next)=>{
//     const {file} = req
//     if (!file){
//         const error =   new Error('Por favor suba un archivo')
//         error.httpStatusCode = 400  
//         return next(error)
//     }
//     res.send(file)

// })

const postSign = async (req, res,next) => {
    const { email, password,name,adress,age,phone,pic } = req.body;
    
    try {
        const user = {
        email,
        password: createHash(password),
        name,
        adress,
        age,
        phone,
        // pic: uploadFile(pic)
        };
        const createUser = new userModel(user);
        await createUser.save();
        
        res.redirect('/login');

    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { getSign, postSign };
