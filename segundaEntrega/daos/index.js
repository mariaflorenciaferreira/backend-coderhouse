let productosDao
let carritoDao

switch (process.env.DAO) {
    case 'fs':
        const ProductosDaoArchivo = require('./productos/ProductosDaoArchivo')
        productosDao = new ProductosDaoArchivo()
        const CarritoDaoArchivo = require('./carritos/CarritosDaoArchivo')
        carritoDao = new CarritoDaoArchivo()
        break

    case 'mongoDB':
        const ProductosDaoMongoDb = require('./productos/ProductosDaoMongoDB')
        productosDao = new ProductosDaoMongoDb()
        const CarritoDaoMongoDb = require('./carritos/CarritosDaoMongoDb')
        carritoDao = new CarritoDaoMongoDb()
        break

    case 'firebase':
        const ProductosDaoFirebase = require('./productos/ProductosDaoFirebase')
        productosDao = new ProductosDaoFirebase()
        const CarritoDaoFirebase = require('./carritos/CarritosDaoFirebase')
        carritoDao = new CarritoDaoFirebase()
        break
        
    default:
        break;
}

module.exports = {
    productosDao,
    carritoDao
}