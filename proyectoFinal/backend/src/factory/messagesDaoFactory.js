import MessagesMongoDbDao from '../persistencia/DAOs/MessagesMongoDb.DAO.js';
import DbClient from '../DB/mongo.config.js';



let dao;
const PERSISTENCIA = process.env.PERSISTENCIA
switch (PERSISTENCIA) {
    case 'MONGO':
        const dbClient = new DbClient();
        await dbClient.connect();
        dao = new MessagesMongoDbDao();
        break;
    default:
        dao = new MessagesMongoDbDao();
}

export function getDao() {
    return dao;
}
