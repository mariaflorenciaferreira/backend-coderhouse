const express=require('express')

const app=express()

// app.get('/inicio', (req,res)=>{
//     res.send('Hola Mundo')
// })

app.get('/', (req,res)=>{
        res.send('<h1>Bienvenidos al servidor express</h1>')
})
    

let visitas=0

app.get('/visitas', (req,res)=>{
    visitas++
    res.send(`La cantidad de visitas es: ${visitas}`)
})

app.get('/fyh', (req,res)=>{

        const date= new Date()
        const hora= date.getHours()
        const minutos= date.getMinutes()
        const segundos=date.getSeconds()
        const dia=date.getDate()
        const mes=date.getMonth()
        const año=date.getFullYear()

        res.send(`Son las ${hora}:${minutos}:${segundos} del día ${dia}/${mes}/${año} `)
})


const PORT=4000

const server=app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto: ${server.address().port}`)

})

server.on('error',(err)=>{ console.log(err) })