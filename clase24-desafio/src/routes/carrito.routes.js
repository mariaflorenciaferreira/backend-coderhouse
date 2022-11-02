const express=require('express')
const {Router}=express

const{ getCarts,
    getCartById,
    postCart,
    postProductToCart,
    deleteProductToCart,
    deleteCart} =require('../controllers/carrito.controllers')

const routerCarrito=Router()

routerCarrito.get('/',getCarts)
routerCarrito.get('/:id',getCartById)

routerCarrito.post('/',postCart)
routerCarrito.post('/:id/productos',postProductToCart)

routerCarrito.delete('/:id/productos',deleteProductToCart)
routerCarrito.delete('/:id',deleteCart)

module.exports=routerCarrito