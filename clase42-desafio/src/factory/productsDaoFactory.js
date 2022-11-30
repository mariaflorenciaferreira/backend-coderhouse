import ProductsMongoDbDao from '../persistencia/DAOs/ProductsMongoDb.DAO.js';
import DbClient from '../DB/mongo.config.js';



let dao;
const PERSISTENCIA = process.env.PERSISTENCIA
switch (PERSISTENCIA) {
    case 'MONGO':
        const dbClient = new DbClient();
        await dbClient.connect();
        dao = new ProductsMongoDbDao();
        break;
    default:
        dao = new ProductsMongoDbDao();
}

export function getDao() {
    return dao;
}
