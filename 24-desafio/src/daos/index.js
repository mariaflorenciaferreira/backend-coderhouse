let productosDao
let carritoDao

switch (process.env.DAO) {

    case 'mongoDB':
        const ProductosDaoMongoDb = require('./productos/ProductosDaoMongoDB')
        productosDao = new ProductosDaoMongoDb()
        
        const CarritoDaoMongoDb = require('./carritos/CarritosDaoMongoDb')
        carritoDao = new CarritoDaoMongoDb()

        const UserDaoMongoDb=require('./users/UsersDaoMongoDb')
        userDao=new UserDaoMongoDb()

        break

        
    default:
        break;
}

module.exports = {
    productosDao,
    carritoDao,
    userDao
}