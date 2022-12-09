const Contenedor= require('./contenedor')
const express=require('express')

const app=express()

const producto= new Contenedor('./listadoProductos.txt')
const PORT=8080


app.get('/',async  (req,res)=>{


    res.send("Bienvenido, para ver los productos ingresar a /productos, para ver un producto al azar ingresar /productoRandom")
})


app.get('/productos',async  (req,res)=>{

    const productosDisponibles= await producto.getAll()
    res.json(productosDisponibles)
})


app.get('/productoRandom', async (req,res)=>{

    const numero=(min,max)=>{
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    
    console.log(numero(1,3))
    
    const productoElegido=await producto.getProduct(numero(1,3))
    res.send(productoElegido)
    console.log(productoElegido)
})



const server=app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto: ${server.address().port}`)

})
server.on('error',(err)=>{ console.log(err) })

