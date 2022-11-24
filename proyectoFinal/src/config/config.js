require('dotenv').config();
const os = require("os");
const parseArgs = require ("minimist");
const args = parseArgs(process.argv.slice(2));


const options= {alias:{p:"port", m:"modo"}};
const port = parseArgs(process.argv,options).port;
const modo = parseArgs(process.argv,options).modo;

const config={
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || 'localhost',
    PORT: port || process.env.PORT,
    MODO: modo,
    MONGODB_URL: process.env.MONGODB_URL || 'noURL',
    MONGO_DB: process.env.MONGO_BASE || 'ecommerce',
    EMAIL_ADMINISTRADOR: process.env.MAIL_ADMIN
}

module.exports=config