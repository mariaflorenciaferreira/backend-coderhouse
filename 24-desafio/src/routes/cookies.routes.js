const express=require('express')

const router=express.Router()


// // crear cookies
// router.post('/',async(req,res)=>{
router.get('/',async(req,res)=>{
    try {
        const {name, value,expire}=req.query
            if(!name||!value){
                res.status(400).json({
                    success:false,
                    message:'Error con nombre o valor'
                })
            }
        
            let config={}
            config['signed']=true
        
            if(expire){
                config['maxAge']=parseInt(expire)*1000
            }
        
            res.cookie(name,value,config)
            res.status(200).json({
                success:true,
                message:'cookie guardada'
            })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
})


// leer cokies
// app.get('/cookies',async (req,res)=>{
//     const {cookies}=req
//     res.status(200).json(cookies)
// })

// leer cokies encriptadas

router.get('/',async(req,res)=>{
    try {
        const {signedCookies}=req
        res.status(200).json(signedCookies)

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
})


router.delete('/:cookieName',async(req,res)=>{
    try {
        const {cookieName}=req.params
        req.clearCookie(cookieName)

        res.status(200).json({
            success:true,
            message:`Cookie ${cookieName} borrada`
        })

    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
})

module.exports=router