const { graphqlHTTP } = require( 'express-graphql')
const { buildSchema } = require( 'graphql')
const Producto=require('../api/ProductApi')

const api = new Producto()

const rootValue={
    getProducto:api.getProducto,
    getProductos:api.getProductos,
    createProducto:api.createProducto,
    updateProducto:api.updateProducto,
    deleteProducto:api.deleteProducto
}

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



class GraphQLController {
    constructor() {
        this.api = new Producto();
        this.config = {
            schema,
            rootValue: {
            getProducto: this.api.getProducto,
            getProductos: this.api.getProductos,
            createProducto: this.api.createProducto,
            updateProducto: this.api.updateProducto,
            deleteProducto: this.api.deleteProducto,
            },
            graphiql: true
        };
        return graphqlHTTP(this.config);
    }
}


module.exports= {
    schema,
    rootValue,
    GraphQLController
}