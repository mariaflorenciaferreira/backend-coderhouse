const express = require( 'express')
const { graphqlHTTP } = require( 'express-graphql')
const { buildSchema } = require( 'graphql')
const Producto =require('./model/producto.model')

const gqlConfig=require('./api/ProductApi')


const app = express()
app.use(express.static('public'))
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

// query {
//     getProductos {
//       nombre
//       precio
//     }
//    }
