const { buildSchema } = require( 'graphql')

const{ getProducto,
    getProductos,
    createProducto,
    updateProducto,
    deleteProducto} =require('../controllers/Product.Controllers') 

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

module.exports=gqlConfig
