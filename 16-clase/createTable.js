const {options} = require ('./sqlite3/conexionDb')
const knex=require('knex')(options)


// knex.schema.createTable('usuarios',table=>{
//     table.increments('id')
//     table.string('name')
//     table.string('email')
//     table.string('password')
//     table.integer('edad')
// })

const crearTabla = async (nombreTabla)=>{
    try {
        await knex.schema.createTable(nombreTabla,table=>{
            table.increments('id')
            table.string('name')
            table.integer('price')
        })

        console.log('tabla creada')
    }catch (error) {
        console.log(error)
    }
}

crearTabla('cars')