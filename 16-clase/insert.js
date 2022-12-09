const  {options}=require('./mariaDB/conexionDb')
const knex=require('knex')(options)

const arrayCars=[
    {name:'BMW',price:50000},
    { name:'Ferrari',price:1000000}
]

knex('cars').insert(arrayCars)
.then(data=>console.log(data))
.catch(data=>console.log(err))
.finally(()=>knex.destroy())