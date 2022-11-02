const express=require('express')
const router=express.Router()


const routerCarrito=require('./carrito.routes')
const routerProductos=require('./producto.routes')


router.get('/',async (req,res)=>{
    res.status(200).json({
        success:true,
        message:'Bienvenido'
    })
})

.use('/api/productos',routerProductos)
.use('/api/carritos',routerCarrito)

module.exports=router