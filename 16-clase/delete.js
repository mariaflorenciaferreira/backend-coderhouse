const  {options}=require('./mariaDB/conexionDb')
const knex=require('knex')(options)

knex.from('cars').where('price','>', 600000).del()
.then(()=>console.log('tabla borrada'))
.catch(err=>console.log(err))
.finally(()=>knex.destroy())
