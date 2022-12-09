// funciones (controlador) _______________________________________________________________________________________
const Producto =require('../model/producto.model')
const crypto = require('crypto')


const productosMap = {}


function getProductos({ campo, valor }) {
    const productos = Object.values(productosMap)
    if (campo && valor) {
        return productos.filter(p => p[ campo ] == valor);
    } else {
        return productos;
    }
}

function getProducto({ id }) {
    if (!productosMap[ id ]) {
        throw new Error('Producto not found.');
    }
    return productosMap[ id ];
}

function createProducto({ datos }) {
    const id = crypto.randomBytes(10).toString('hex');
    const nuevoProducto = new Producto(id, datos)
    productosMap[ id ] = nuevoProducto;
    return nuevoProducto;
}

function updateProducto({ id, datos }) {
    if (!productosMap[ id ]) {
        throw new Error('Producto not found');
    }
    const productoActualizado = new Producto(id, datos)
    productosMap[ id ] = productoActualizado;
    return productoActualizado;
}

function deleteProducto({ id }) {
    if (!productosMap[ id ]) {
        throw new Error('Producto not found');
    }
    const productoBorrado = productosMap[ id ]
    delete productosMap[ id ];
    return productoBorrado;
}

module.exports={
    getProducto,
    getProductos,
    createProducto,
    updateProducto,
    deleteProducto
}