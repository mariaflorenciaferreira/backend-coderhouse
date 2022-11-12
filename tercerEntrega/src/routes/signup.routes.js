const Router = require('express').Router;
const passport = require('passport');
const multer =require('multer');
const path =require('path')


const { getSign, postSign } = require('../controllers/user.controllers/signController');
const { userExistMiddleware } = require('../middlewares/middlewares.js');

const router = Router();


const storage=multer.diskStorage({
    destination:'src/public/uploads',
    filename:(req,file,cb)=>{
        cb(null,`${Date.now() }-${file.originalname}`)
    }
})

const upload=multer({storage})

router.use(multer({
    storage,
    dest:'src/public/uploads',
    fileFilter:(req,file,cb)=>{
        const fileTypes=/jpeg|jpg|png|jfif/;
        const mimetype=fileTypes.test(file.mimetype);
        const extname=fileTypes.test(path.extname(file.originalname))

        if(mimetype && extname){
            return cb(null,true)
        }
        cb("Error: El archivo debe ser una imágen jpg,jpeg o png");
    }
}).single('pic'))

router.get('/', getSign);
router.post('/', userExistMiddleware, postSign,);

module.exports = router;
