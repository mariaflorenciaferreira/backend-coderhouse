const ContenedorMongoDB=require('../../contenedores/ContenedorMongoDB')
const ProductosModel=require('../../DB/archivosMongo/productoModel')


class ProductoMongoDB extends ContenedorMongoDB{
    constructor(){
        super(ProductosModel)
    }
}

module.exports=ProductoMongoDB