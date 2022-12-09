const express=require("express")
const authMiddleware=require('../middlewares/auth/auth.middleware')
const countMiddleware=require('../middlewares/count/count.middleware')
const router=express.Router()

const {getUsers,getUserBy}=require('../controllers/user.controller')
const { userDao } = require("../daos/index")

router.get("/",authMiddleware,countMiddleware, async (req,res)=>{
    try {

        res.status(200).send(`<h1>Hola ${req.session.username}. Esta es tu visita Nº ${req.session.visits} </h1>`)
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
})

router.post('/login', async(req,res)=>{

    try {
        const {username,password}=req.body 

        const newUser={username,password}

        if(username && password){
            req.session.username=username
            req.session.password=password
            req.session.admin=true

            console.log(newUser)
            userDao.save(newUser)
            .then(res.status(200).send(`<h1>Usuario ${username} autenticado</h1>`)) 
            .catch(err => {
                console.log(`Error al guardar el usuario ${err}`)
            })

            
            return newUser
        }
        return res.status(400).send(`<h1>datos incorrectos</h1>`)
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
})

router.get('/users', async(req,res)=>{
    try {
        userDao.getUsers()
        .then(response=>{
            res.send(response)
        })
        .catch(error => {
            console.log(`Problema al cargar los usuarios ${error}`)
        })
        
    } catch (error) {
        return res.status(400).send(`<h1>No pueden recuperarse los usuarios</h1>`)
    }
})

router.get('/logout',authMiddleware, async(req,res)=>{
    try {
        req.session.destroy(err=>{
            if(err){
                return res.status(500).send(`<h1>No se pudo cerrar sesión</h1>`)
            }
        })
        return res.status(200).send(`<h1>Hasta la vuelta</h1>`)

        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
    }
})



module.exports=router