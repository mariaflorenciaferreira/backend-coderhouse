// cliente

const server=io().connect()


const render=(productos)=>{
    let listado=document.getElementById('listado')

    let html= productos.map(prod=>{
        return `<li>
        <strong>${prod.nombre}</strong>
        <em>Precio:${prod.precio}</em>
        </li>`
    })

    listado.innerHTML=html.join(' ')
}


const addProduct=(evt)=>{
    const nombre=document.querySelector('#nombre').value
    const precio=document.querySelector('#precio').value

    const producto={nombre,precio}
    console.log(producto)
    server.emit('producto-nuevo',producto,(id)=>{
        console.log(id)
    })
    
    return false
}


server.on('mensaje-servidor', mensaje=>{
    // console.log('mensaje-servidor: ',mensaje)
    render(mensaje.productos)

})