import { MongoClient } from 'mongodb';
import dotenv from 'dotenv/config'


export default class DbClient {
    constructor() {
        this.cliente = new MongoClient(process.env.URL_CONNECTION, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        });
    }

    connect() {
        return this.cliente.connect();
    }

    disconnect() {
        return this.cliente.close();
    }

    getCollection(database, collection) {
        return this.cliente.db(database).collection(collection);
    }
}
