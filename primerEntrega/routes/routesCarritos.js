const express=require('express')
const {Router}=express

const routerCarritos=Router()
const Carritos= require("../Api/CarritoComands")
const DbCarritos=new Carritos('./Db/carritos.json')



// CARRITOS 

// obtener productos guardados en carrito
routerCarritos.get('/:id/productos', async(req,res)=>{
    const {id}=req.params
    
    const carritoId= await DbCarritos.getById(Number(id))

    productos=carritoId.carritoId.productosCarrito

    
    res.json({
        productos
    })
    
})


// agregar productos al carrito
routerCarritos.put('/:id/productos',async (req,res) => {
    const {id} = req.params;
    const objectToAdd=req.body
    const carritoCargar= await DbCarritos.addToCart(id,objectToAdd)

    res.json(carritoCargar)

    
})

// nuevo carrito
routerCarritos.post('/', (req,res)=>{

    const objCarrito ={
        id:req.body.id,
        
    }
    DbCarritos.save(objCarrito)
    

    res.send({
        objCarrito
    })
})

// borrar carrito por id
routerCarritos.delete('/:id', async (req,res)=>{
    const{id}=req.params
    await DbCarritos.delete(Number(id))

    res.json({
        msj:`carrito ${id} borrado: `
    })
})

// borrar productos carrito

// routerCarritos.deleteProds('/:id/productos/:id_prod', async (req,res)=>{
//     const{id}=req.params
//     await DbCarritos.getById(Number(id))

//     res.json({
//         msj:`Productos de carrito ${id} borrados `
//     })
// })




module.exports=routerCarritos