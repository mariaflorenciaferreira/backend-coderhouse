const express=require('express')
const {Router}=express

const{ getCarts,
    getCartById,
    postCart,
    postProductToCart,
    deleteProductToCart,
    deleteCart,
    realizarCompra
} =require('../controllers/carrito.controllers/carrito.controllers')

const routerCarrito=Router()

routerCarrito.get('/',getCarts)
routerCarrito.get('/:id',getCartById)


routerCarrito.post('/',postCart)
routerCarrito.post('/:id/productos',postProductToCart)


routerCarrito.get('/:id/comprarCarrito',realizarCompra)



routerCarrito.delete('/:id/productos',deleteProductToCart)
routerCarrito.delete('/:id',deleteCart)


module.exports=routerCarrito