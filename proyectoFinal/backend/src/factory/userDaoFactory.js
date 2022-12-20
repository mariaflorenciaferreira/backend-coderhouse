import UsersMongoDbDao from '../persistencia/DAOs/UsersMongoDb.DAO.js';
import DbClient from '../DB/mongo.config.js';



let dao;
const PERSISTENCIA = process.env.PERSISTENCIA
switch (PERSISTENCIA) {
    case 'MONGO':
        const dbClient = new DbClient();
        await dbClient.connect();
        dao = new UsersMongoDbDao();
        break;
    default:
        dao = new UsersMongoDbDao();
}

export function getDao() {
    return dao;
}
