const  productosMap=require('../model/productModel')
const crypto = require('crypto')

class Producto{
    constructor() {
        this.producto = [];
    }

    getProducto({ campo, valor }) {
        const productos = Object.values(productosMap)
        if (campo && valor) {
            return productos.filter(p => p[ campo ] == valor);
        } else {
            return productos;
        }
    }

    getProductos({ id }) {
        if (!productosMap[ id ]) {
            throw new Error('Producto not found.');
        }
        return productosMap[ id ];
    }

    createProducto({ datos }) {
        const id = crypto.randomBytes(10).toString('hex');
        const nuevoProducto = new Producto(id, datos)
        productosMap[ id ] = nuevoProducto;
        return nuevoProducto;
    }

    updateProducto({ id, datos }) {
        if (!productosMap[ id ]) {
            throw new Error('Producto not found');
        }
        const productoActualizado = new Producto(id, datos)
        productosMap[ id ] = productoActualizado;
        return productoActualizado;
    }

    deleteProducto({ id }) {
        if (!productosMap[ id ]) {
            throw new Error('Producto not found');
        }
        const productoBorrado = productosMap[ id ]
        delete productosMap[ id ];
        return productoBorrado;
    }


}


module.exports= Producto