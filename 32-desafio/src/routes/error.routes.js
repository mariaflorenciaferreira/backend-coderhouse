const router = require('express').Router();
const { route } = require(".");
const logger = require('../utils/logger');


function errorRoute(req, res) {
    const title = 'ROUTING ERROR';
    const { url, method } = req
    logger.warn(`Route ${method} ${url} non-existent`)
    res.status(404).json( { titulo: title });
}

router.get('/*', errorRoute);

router.post('/*', errorRoute);

router.put('/*', errorRoute);

router.delete('/*', errorRoute);

module.exports = router;