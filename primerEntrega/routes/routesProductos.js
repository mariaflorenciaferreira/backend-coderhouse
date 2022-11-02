const express=require('express')
const {Router}=express

const routerProductos=Router()
const Productos= require("../Api/ProductosComands")
const DbProductos=new Productos('./Db/productos.json')


// validación administrador

const admin=true

function isAdmin(req, res, next) {
    if (admin) {
        next();
    } else {
        res.send(`Solo los administradores pueden ejecutar esa acción`);
    }
}


// PRODUCTOS

// obtener todos los productos
routerProductos.get('/', async(req,res)=>{
    const productosDisponibles= await DbProductos.getAllProducts()
    res.send({
        productos:productosDisponibles 
    })

})

// obtener producto por id
routerProductos.get('/:id', async(req,res)=>{
    const {id}=req.params
    const productoId= await DbProductos.getById (Number(id))

    res.send({
        producto:productoId
    })

})

// nuevo producto
routerProductos.post('/', isAdmin,async (req,res,next)=>{

    // const objProducto =req.body
    const objProducto ={
        titulo:req.body.titulo,
        precio:req.body.precio,
        imagen:req.body.imagen,
        descripcion:req.body.descripcion,
        stock:req.body.stock
    }
    DbProductos.save(objProducto)
    console.log(objProducto)

    res.json({
        objProducto
    })
})

// recibe producto y actualiza por id
routerProductos.put('/:id',isAdmin,async(req,res,next)=>{
    const {id}=req.params
    const  objProducto=req.body
    
    const DbProductos= new Productos('./Db/productos.json')
    DbProductos.updateById({id: parseInt(id),...objProducto})
    const respuesta= updateById({titulo,precio,imagen,descripcion,codigoProducto,timestamp,id})
    res.json({respuesta})

})

// borrar por id
routerProductos.delete('/:id',isAdmin,async (req,res,next)=>{
    const{id}=req.params
    await DbProductos.delete(Number(id))

    res.json({
        msj:`producto ${id} borrado: `
    })
})

module.exports=routerProductos