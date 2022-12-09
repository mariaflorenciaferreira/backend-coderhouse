const  {options}=require('./mariaDB/conexionDb')
const knex=require('knex')(options)

knex.from('cars').select('*')
.then(resp=>console.log(resp))
.catch(err=>console.log(err))
.finally(()=>knex.destroy())
