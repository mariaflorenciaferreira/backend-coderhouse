const ContenedorMongoDB=require('../../contenedores/ContenedorMongoDB')
const ProductosModel=require('../../DB/modelosMongo/productoModel')


class ProductoMongoDB extends ContenedorMongoDB{
    constructor(){
        super(ProductosModel)
    }
    
}

module.exports=ProductoMongoDB