import ChatsMongoDbDao from '../persistencia/DAOs/ChatMongoDb.DAO.js';
import DbClient from '../DB/mongo.config.js';



let dao;
const PERSISTENCIA = process.env.PERSISTENCIA
switch (PERSISTENCIA) {
    case 'MONGO':
        const dbClient = new DbClient();
        await dbClient.connect();
        dao = new ChatsMongoDbDao();
        break;
    default:
        dao = new ChatsMongoDbDao();
}

export function getDao() {
    return dao;
}
