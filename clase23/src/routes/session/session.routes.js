const express=require("express")
const authMiddleware=require('../../middlewares/auth/auth.middleware')
const countMiddleware=require('../../middlewares/count/count.middleware')
const router=express.Router()

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

router.get('/login', async(req,res)=>{
    try {
        const {username,password}=req.query        
        if(username=='Pablo' && password=='123456'){
            req.session.username=username
            req.session.admin=true
            
            return res.status(200).send(`<h1>Usuario autenticado</h1>`)
        }
        return res.status(400).send(`<h1>datos incorrectos</h1>`)
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message,
        })
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