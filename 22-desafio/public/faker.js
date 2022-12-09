const {faker}=require('@faker-js/faker')

faker.locale='es'

function generarProducto(){
    return{
        name:faker.commerce.product(),
        price:faker.commerce.price(),
        img:faker.image.animals(),
    }
}

const randomData=()=>{

    const productosFake=[]

    for (let i=0; i<5;i++){
        const nuevoProducto=generarProducto()
        productosFake.push(nuevoProducto)
    }
    return productosFake
}

module.exports=randomData


