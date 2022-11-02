const express = require('express')
const logger = require('../utils/logger')
const Router = require('express').Router;
const router = Router();

const app = express();



app.get('/*', (req, res) => {
    logger.info("127.0.0.1 - log info 2");
    logger.warn("127.0.0.1 - log warn 2");
    logger.error("127.0.0.1 - log error 2");

})


app.get('/*', (req, res) => {
    const { url, method } = req
    logger.info(`Se recibio una peticion ${method} a la ruta ${url}`)
    res.send('no existe la ruta')
})



module.exports = router;