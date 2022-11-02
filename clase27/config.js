// module.exports={
//     NODE_ENV: process.env.NODE_ENV || 'development',
//     HOST: process.env.HOST || '127.0.0.1',
//     PORT: process.env.PORT || 3000
// }




const path = require('path')
require('dotenv').config()
const dotenv=require('dotenv')

// dotenv.config({
//     path:
//         process.env.MODO == 'byn'
//             ? path.resolve(__dirname, 'byn.env')
//             : path.resolve(__dirname, 'colores.env')
// })


dotenv.config({
    path:
    process.env.MODO=='byn'
    ?path.resolve(__dirname,'byn.env')
    :path.resolve(__dirname,'colores.env')
})
console.log(process.env.MODO)

const fondo = process.env.FONDO
const frente = process.env.FRENTE

console.log({
    fondo,
    frente
})
