const logger = require('pino')()

logger.level = 'info'

// logger.mehod([merginObjetos], [mensaje], [...interpolacionesValues])

// logger.info('pino info')
// logger.error('pino error')

// logger.info('La respuesta es %d %d %s',42, 43, 44)
// logger.info({a:42},'Hola mundo')
// logger.info({a:42,b:2},'Hola mundo')
// logger.info({c: {a:42,b:2}},'Hola mundo')

const child = logger.child({a: 'property'})


child.info('Hola child info')
child.info('Hola child info 2')
child.error('Hola child error')
