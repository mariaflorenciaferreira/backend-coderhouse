// servidor 

const express = require('express')
const { Server: HttpServer } = require('http')
const { Server: IoServer } = require('socket.io')

const app = express()
const serverHttp = new HttpServer(app)
const io = new IoServer(serverHttp)

app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.sendFile('index.html',{root: __dirname})
})


const mensajes=[
    {id:1, mensaje:'hola 1'},
    {id:2, mensaje:'hola 2'}
]

io.on('connection',socket=>{
    console.log(socket.id)
    socket.emit('mensaje-server','hola cliente')

    socket.on('mensaje-cliente', data=>{
        console.log(data)
        io.sockets.emit('mensaje-server',data)
    })


    socket.on('disconnect',()=>{
        console.log('usuario desconectado', socket.id)
    })
})


serverHttp.listen(3000,()=>{
    console.log('Escuchando en puerto 3000')
})