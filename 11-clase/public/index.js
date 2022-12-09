// cliente

const mensaje=document.querySelector('#mensaje')
const enviar=document.querySelector('#enviar')

// configuro conexión con servidor
const socket = io()

socket.on('connect',()=>{
    console.log('connected to server')
    // socket.emit('mensaje-cliente','hola server')
})

socket.on('disconnect',()=>{
    console.log('server disconnected ')
})

socket.on('mensaje-server',data=>{
    console.log(data)
})



enviar.addEventListener('click'),()=>{
    console.log(mensaje.value)
    socket.emmit('mensaje-cliente',mensaje.value)
}