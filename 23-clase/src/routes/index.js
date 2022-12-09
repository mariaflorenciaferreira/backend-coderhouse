const express=require('express')

const cookiesRoutes=require('./cookies/cookies.routes')
const sessionRoutes=require('./session/session.routes')

const router=express.Router()

router.get('/',async (req,res)=>{
    res.status(200).json({
        success:true,
        message:'Health up'
    })
})
.use('/cookies',cookiesRoutes)
.use('/session',sessionRoutes)

module.exports=router

