import OrdersMongoDbDao from '../persistencia/DAOs/OrdersMongoDb.DAO.js';
import DbClient from '../DB/mongo.config.js';



let dao;
const PERSISTENCIA = process.env.PERSISTENCIA
switch (PERSISTENCIA) {
    case 'MONGO':
        const dbClient = new DbClient();
        await dbClient.connect();
        dao = new OrdersMongoDbDao();
        break;
    default:
        dao = new OrdersMongoDbDao();
}

export function getDao() {
    return dao;
}