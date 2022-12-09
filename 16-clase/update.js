const  {options}=require('./mariaDB/conexionDb')
const knex=require('knex')(options)

knex.from('cars').where('price', 1000000).update({
    price:9500000
})
.then(resp=>console.log(resp))
.catch(err=>console.log(err))
.finally(()=>knex.destroy())
