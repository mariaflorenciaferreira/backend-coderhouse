let productosDao
let carritoDao


const ProductosDaoMongoDb = require('./productos/ProductosDaoMongoDB')
productosDao = new ProductosDaoMongoDb()
const CarritoDaoMongoDb = require('./carritos/CarritosDaoMongoDb')
carritoDao = new CarritoDaoMongoDb()



module.exports = {
    productosDao,
    carritoDao
}