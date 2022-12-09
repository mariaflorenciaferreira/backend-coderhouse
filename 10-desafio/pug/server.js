const express=require('express')
const {Router}=express
const Contenedor= require("./contenedor")
const contenedor=new Contenedor('./productos.txt')



const app=express()
const routerProductos=Router()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))


app.set('view engine','pug')
app.set('views','./views')

const arrayProductos=[]


routerProductos.get('/',async(req,res)=>{
    const productosDisponibles= await contenedor.getAllProducts()
    console.log(productosDisponibles)
    res.render('index',{
        productosDisponibles:true,
        productos:productosDisponibles
    })
})



// PRODUCTOS

// obtener todos los productos
routerProductos.get('/', async(req,res)=>{
    const productosDisponibles= await contenedor.getAllProducts()
    res.send({
        productos:productosDisponibles,
        listaProductos:true
    })

})

// obtener producto por id
routerProductos.get('/api/productos/:id', async(req,res)=>{
    const productoId= await contenedor.getById()

    res.send({
        producto:productoId
    })

})

// nuevo producto
routerProductos.post('/', (req,res)=>{

    // const objProducto =req.body
    const objProducto ={
        titulo:req.body.titulo,
        precio:req.body.precio,
        imagen:req.body.imagen
    }
    contenedor.save(objProducto)
    console.log(objProducto)

    res.redirect("/api/productos/forms");

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

// productos y formulario con pug
routerProductos.get('/forms', async(req,res)=>{
    const productosDisponibles= await contenedor.getAllProducts()
    
    res.render('forms',{
        mensaje:'Crear nuevo producto',
        
    })
})




app.use('/api/productos',routerProductos)

const PORT=process.env.PORT||4000

app.listen(PORT,()=>{
    console.log('server on PORT 4000')
})

app.on('error',(err)=>{ console.log(err) })