const express=require('express')
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

const PORT=process.env.PORT||8080

app.set('view engine','ejs')
app.set('views','./views')


app.get('/', (req,res)=>{

    let productos=[
        {nombre:'producto 1',precio:'$100'},
        {nombre:'producto 2',precio:'$200'},
        {nombre:'producto 3',precio:'$300'},
        {nombre:'producto 4',precio:'$400'}
    ]

    res.render('pages/index',{

        mensaje:'Hola ejs',
        productos
        
    })
})

app.post('/productos',(req,res)=>{
    const productoNuevo=req.body

    console.log(productoNuevo)

    productos.push(productoNuevo)

    res.render('pages/index',{
        mensaje:'Enviando producto',
        productos    
        
    })

})



app.listen(PORT,()=>{
    console.log('server on PORT 8080')
})

app.on('error',(err)=>{ console.log(err) })