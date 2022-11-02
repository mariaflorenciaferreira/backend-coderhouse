const express=require('express')
const {Router}=express

const routerProductos=require('./routes/routesProductos')
const Productos= require("./Api/ProductosComands.js")
const DbProductos=new Productos('./Db/productos.json')


const routerCarritos=require('./routes/routesCarritos')
const Carritos= require("./Api/CarritoComands")
const DbCarritos=new Carritos('./Db/carritos.json')

const dotenv = require ('dotenv').config()


const app=express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))


function error404(req,res,next){
    let error=new Error()

    error.status=404
    res.json(`Error  ${error.status} - Página no existente` )
    
    next()
}

app.use('/api/productos',routerProductos)
app.use('/api/carritos',routerCarritos)
app.use(error404)

// config puerto
const PORT = process.env.PORT 

app.listen(PORT,()=>{
    console.log(`Escuchando en puerto ${PORT}`)
})