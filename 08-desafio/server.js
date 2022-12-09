const express=require('express')
const {Router}=express
const Contenedor= require("./contenedor")
const contenedor=new Contenedor('./productos.txt')



const app=express()
const routerProductos=Router()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))


const arrayProductos=[]

// PRODUCTOS

// obtener todos los productos
routerProductos.get('/', async(req,res)=>{
    const productosDisponibles= await contenedor.getAllProducts()
    res.send({
        productos:productosDisponibles 
    })

})

// obtener producto por id
routerProductos.get('/:id', async(req,res)=>{
    const {id}=req.params
    const productoId= await contenedor.getById(id)

    res.send({
        producto:productoId
    })

})

// nuevo producto
routerProductos.post('/', (req,res)=>{

    // const objProducto =req.body
    const objProducto ={
        titulo:req.body.title,
        precio:req.body.precio,
        categoria:req.body.categoria
    }
    contenedor.save(objProducto)
    console.log(objProducto)

    res.json({
        objProducto
    })
})

// recibe producto y actualiza por id
routerProductos.put('/:id', (req,res)=>{
    const {id}=req.params
    const  objProducto=req.body
    
    const contenedor= new Contenedor('./productos.txt')
    contenedor.updateById({id: parseInt(id),...objProducto})
    const respuesta= updateById({titulo,precio,categoria})
    res.json({respuesta})
 
})

// borrar por id
routerProductos.delete('/:id',async(req,res)=>{
    const{id}=req.params
    await contenedor.delete(id)

    res.json({
        msj:`producto ${id} borrado: `
    })
})




app.use('/api/productos',routerProductos)

const PORT=process.env.PORT||4000

app.listen(PORT,()=>{
    console.log('server on PORT 4000')
})

app.on('error',(err)=>{ console.log(err) })