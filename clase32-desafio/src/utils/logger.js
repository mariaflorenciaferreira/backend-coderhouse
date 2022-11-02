const log4js=require('log4js')
const dotenv=require('dotenv')


function failRoute(req, res) {
    const title = 'ROUTING ERROR';
    const { url, method } = req
    log4js.warn(`Route ${method} ${url} non-existent`)
    res.status(404).json( { titulo: title });
}

log4js.configure({


    appenders: {
        // defino dos soportes de salida de datos
        consola: { type: 'console' },
        archivoErrores: { type: 'file', filename: 'src/logs/errores.log' },
        archivoWarning: { type: 'file', filename: 'src/logs/warning.log' },
        
        // defino sus niveles de logueo
        loggerConsola: { type: 'logLevelFilter', appender: 'consola', level: 'info' },
        loggerArchivoErrores: { type: 'logLevelFilter', appender: 'archivoErrores', level: 'error' },
        loggerArchivoWarning: { type: 'logLevelFilter', appender: 'archivoWarning', level: 'warning' }
    },
    categories: {
        default: {
            appenders: ['loggerConsola'], level: 'all'
        },
        prod: {
            appenders: ['loggerConsola', 'loggerArchivoErrores', 'loggerArchivoWarning'], level: 'all'
        }
    }

})


let logger=null

if(process.env.NODE_ENV==='production'){
    console.log(process.env.NODE_ENV)
    logger=log4js.getLogger('prod')
}else{
    logger=log4js.getLogger()
}


module.exports=logger