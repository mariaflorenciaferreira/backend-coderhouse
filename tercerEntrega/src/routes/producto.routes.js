const express=require('express')
const {Router}=express

const{getProducts,
	getProductById,
	postProduct,
	putProduct,
	deleteProduct,
	deleteAllProducts,
	buscarConCotizacionEnDolares
	}=require('../controllers/producto.controllers/productos.controller')

const routerProductos=Router()


routerProductos.get('/',getProducts)
// routerProductos.get('/:id',getProductById)
routerProductos.get('/:id',buscarConCotizacionEnDolares)

routerProductos.post('/',postProduct)

routerProductos.put('/:id',putProduct)

routerProductos.delete('/:id',deleteProduct)
routerProductos.delete('/',deleteAllProducts)


module.exports=routerProductos