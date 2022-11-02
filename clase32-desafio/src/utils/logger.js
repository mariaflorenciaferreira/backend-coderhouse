const log4js = require("log4js");
const dotenv=require('dotenv').config()

log4js.configure({
    // appenders: { cheese: { type: "file", filename: "src/logs/cheese.log" } },
    // categories: { default: { appenders: ["cheese"], level: "error" } },
    appenders: {
        consola: { type: 'console' },
        archivoErrores: { type: 'file', filename: 'src/logs/errores.log' },
        archivoWarning: { type: 'file', filename: 'src/logs/warning.log' },
        
        
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
});

var logger = log4js.getLogger(process.env.NODE_ENV );



if (process.env.NODE_ENV === 'production') {
    logger = log4js.getLogger('prod')
    console.log( `logger es ${(logger).category}`)

} else {
    logger = log4js.getLogger()   
    console.log(`logger es ${(logger).category}`) 
}


// const log4js=require('log4js')
// const dotenv=require('dotenv')


// log4js.configure({


//     appenders: {

//         consola: { type: 'console' },
//         archivoErrores: { type: 'file', filename: 'src/logs/errores.log' },
//         archivoWarning: { type: 'file', filename: 'src/logs/warning.log' },
        
//         // defino sus niveles de logueo
//         loggerConsola: { type: 'logLevelFilter', appender: 'consola', level: 'info' },
//         loggerArchivoErrores: { type: 'logLevelFilter', appender: 'archivoErrores', level: 'error' },
//         loggerArchivoWarning: { type: 'logLevelFilter', appender: 'archivoWarning', level: 'warning' }
//     },
//     categories: {
//         default: {
//             appenders: ['loggerConsola'], level: 'all'
//         },
//         prod: {
//             appenders: ['loggerConsola', 'loggerArchivoErrores', 'loggerArchivoWarning'], level: 'all'
//         }
//     }

// })


// let logger=null

// if(process.env.NODE_ENV==='production'){
//     console.log(process.env.NODE_ENV)
//     logger=log4js.getLogger('prod')
// }else{
//     logger=log4js.getLogger()
// }


module.exports=logger