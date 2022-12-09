const  {options}=require('./mariaDB/conexionDb')
const knex=require('knex')(options)


knex.from('cars').select('*').where('price','>=', 1000000).orderBy('price','asc')
.then(resp=>console.log(resp))
.catch(err=>console.log(err))
.finally(()=>knex.destroy())
