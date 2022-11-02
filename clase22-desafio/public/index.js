// cliente

const socket=io.connect()

socket.emit('connection',console.log('conectado cliente'))




// formulario comentarios
const addComment=(evt)=>{

    const nombreUsuario=document.querySelector('#nombreUsuario').value;
    const nombre=document.querySelector('#nombre').value;
    const apellido=document.querySelector('#apellido').value;
    const edad=document.querySelector('#edad').value;
    const alias=document.querySelector('#alias').value;
    const avatar=document.querySelector('#avatar').value;
    const comentario=document.querySelector('#comentario').value;

    let nuevoComentario={nombreUsuario,nombre,apellido,edad,alias,avatar,comentario}


    socket.emit('mensaje-nuevo',nuevoComentario);
    form.reset();

    return false;  
}

const renderComentarios=(comentarios)=>{
    let  vistaComentarios=document.getElementById('listadoComentarios');

    let html= comentarios.map(coment=>{
        return `<li>
                <p>Usuario: ${coment.nombreUsuario} = [${coment.comentario}]</p>
            </li>`
    })

    vistaComentarios.innerHTML=html.join(' ')
}

// comentarios
socket.on('lista-mensajes',listadoComentarios=>{
    // console.log(listadoComentarios);
    renderComentarios(listadoComentarios)
})



// carga productos

const form=document.querySelector('#form')
const btn=document.querySelector('#btn')



btn.addEventListener("onclick",(e)=>{
    e.preventDefault()

    const timestamp= new Date().getTime()
    const codigoProducto= (Date.now())
    
    const titulo=document.querySelector('#titulo').value;
    const precio=document.getElementById('precio').value;
    const imagen=document.getElementById('imagen').value;
    const descripcion=document.getElementById('descripcion').value;
    const stock=document.getElementById('stock').value;
    
    
    let producto = {titulo,precio,imagen,descripcion,stock,codigoProducto,timestamp}
    
    socket.emit('producto-nuevo',producto);
    form.reset();
    console.log(producto)

});


const render=(productos)=>{
    let  vistaProductos=document.getElementById('vistaFaker');

    let html= productos.map(prod=>{
        return   `<div>    
        <table class="text-center">
            <tbody >
                <tr class="card">
                    <td class="img-container">
                        <img src="${prod.img}" alt="${prod.name}" width="50px">
                    </td>
                    <td class="card-title">${prod.name}</td>
                    <td class="card-text"> ${prod.price}</td>
                </tr>
            </tbody>
        </table>
    </div>`
    })

    vistaProductos.innerHTML=html.join(' ')
}

// productos
socket.on('lista-productos',listadoProductos=>{
    render(listadoProductos)
    
})





