const express = require( 'express')
const { graphqlHTTP } = require( 'express-graphql')
const { buildSchema } = require( 'graphql')

const crypto = require('crypto')

// Schemaa _______________________________________________________
const schema = buildSchema(`  
    type Producto {
        id: ID!
        nombre: String,
        precio: Int
    }
    input ProductoInput {
        nombre: String,
        precio: Int
    }
    type Query {
        getProducto(id: ID!): Producto,
        getProductos(campo: String, valor: String): [Producto],
    }
    type Mutation {
        createProducto(datos: ProductoInput): Producto
        updateProducto(id: ID!, datos: ProductoInput): Producto,
        deleteProducto(id: ID!): Producto,
    }
`)

// modelo _____________________________________________________________

class Producto {
    constructor(id, { nombre, precio }) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}
const productosMap = {}

// funciones (controlador) _______________________________________________________________________________________


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

const app = express()

app.use(express.static('public'))

const gqlConfig =  {
    schema: schema,
    rootValue: {
        getProductos,
        getProducto,
        createProducto,
        updateProducto,
        deleteProducto
    },
    graphiql: true
}

app.use('/gql', graphqlHTTP(gqlConfig))

const PORT = 8000
app.listen(PORT, err => {
    if (err) {
        console.log(err)
    }
    console.log(`El servidor corriendo en el puerto ${PORT}`)
})


//  consultas

// mutation {
//     createProducto(datos: {
//       nombre: "producto 1",
//       precio: 35
//     }) {
//       id
//     }
//    }

query {
    getProductos {
      nombre
      precio
    }
   }
