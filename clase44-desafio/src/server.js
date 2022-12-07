const express = require( 'express')
const { graphqlHTTP } = require( 'express-graphql')
const crypto = require('crypto')
const gqlConfig=require('../src/controllers/Product.Controllers')

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
//       precio: 350
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
