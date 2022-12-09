import { MongoClient } from 'mongodb';



export default class DbClient {
    constructor() {
        this.cliente = new MongoClient('mongodb+srv://Florencia:Florencia1@cluster0.apzqpkk.mongodb.net/clase40', {
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
