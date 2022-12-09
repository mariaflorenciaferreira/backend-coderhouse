const  {options}=require('./mariaDB/conexionDb')
const knex=require('knex')(options)

const batch=async()=>{
    try {
        
        console.log('-->Borrando los autos')
        await knex('cars').del()

        console.log('-->Insertando autos')
        await knex('cars').insert([
            {name:'BMW',price:50000},
        { name:'Ferrari',price:1000000}
        ])
        
        /console.log('Datos actualizados:')
        rows=await knex().from('cars').select('*')
        for (row of rows) console.log (`${row['name']} - $${row['price']}`)
        

    } catch (error) {
        console.log(error)
        
    }finally{
        knex.destroy()
    }
}

batch()