const express=require('express')

const cookiesRoutes=require('./cookies.routes')
const sessionRoutes=require('./session.routes')
const routerProductos=require('./producto.routes')
const routerCarrito=require('./carrito.routes')

const router=express.Router()

router.get('/',async (req,res)=>{
    res.status(200).json({
        success:true,
        message:'Health up'
    })
})
.use('/cookies',cookiesRoutes)
.use('/session',sessionRoutes)
.use('/api/productos',routerProductos)
.use('/api/carritos',routerCarrito)
module.exports=router
