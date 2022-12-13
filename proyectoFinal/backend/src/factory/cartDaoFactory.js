import CartsMongoDbDao from '../persistencia/DAOs/CartMongoDb.DAO.js';
import DbClient from '../DB/mongo.config.js';



let dao;
const PERSISTENCIA = process.env.PERSISTENCIA
switch (PERSISTENCIA) {
    case 'MONGO':
        const dbClient = new DbClient();
        await dbClient.connect();
        dao = new CartsMongoDbDao();
        break;
    default:
        dao = new CartsMongoDbDao();
}

export function getDao() {
    return dao;
}