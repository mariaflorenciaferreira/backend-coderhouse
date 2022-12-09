const express=require('express')
const app=express()
require ('dotenv').config()
const config=require('./config')


console.log(config.NODE_ENV)
console.log(process.env.NODE_ENV)


console.log(process.env.FRENTE)
console.log(process.env.FONDO)




app.get('/',(req,res)=>{
    res.send('activo')
})


app.listen(config.PORT,process.env.HOST,()=>{
    console.log(`Server en puerto  ${config.PORT}`)
})