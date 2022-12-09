const express=require('express')

const app=express()

app.use(express.json())

const frase = 'Hola mundo cómo están'

app.get('/api/frase/',(req,res)=>{
    
    
    res.json({
        frase
        
    })
})

app.get('/api/letras/:num',(req,res)=>{
    
    const {num}=req.params
    const letra=frase[num-1]
    console.log(letra)

    res.json({
        letra,
        num
        
    })
})


app.get('/api/palabras/:num',(req,res)=>{
    
    const {num}=req.params
    const numero=Number(num)
    console.log(isNaN(numero))

    if((typeof numero==='number') && (!isNaN(numero))){
        const palabra=frase.split(' ')[numero-1]
        res.json({
            palabra,
            numero
        })
    }else{
        res.json({
            error:'El parametro debe ser un número'
        })
    }

})



// id es parametro dinámico capturado en la url
app.get('/api/mensajes/:id',(req,res)=>{
    
    const {id}=req.params

    res.json({
        ok:true,
        mensaje:'Todo esta bien',
        id

    })
})

app.get('/api/mensajes',(req,res)=>{
    
    

    const{nombre,apellido}=req.query
    console.log(nombre)
    console.log(apellido)
    res.json({
        ok:true,
        mensaje:'Todo esta bien',
        nombre,
        apellido
    })
})


app.get('/api/usuarios',(req,res)=>{
    res.json(
    {
        status:200,
        usuarios: [
            {
            id:1,
            nombre:'Juan1'
            },
            {
            id:2,
            nombre:'Juan2'
            },
            {
            id:3,
            nombre:'Juan3'
            }
        ]
    }
    )

})


// metodo post
app.post('/api/mensajes',(req,res)=>{
    
    const{nombre}=req.body
    console.log(req.body)
    
    res.json({
        msj:'todo ok',
        nombre
    })
})


// metodo put
app.put('/api/mensajes/:id',(req,res)=>{
    
    const{nombre}=req.body
    const{id}=req.params
    

    res.json({
        msj:'todo ok',
        id,
        nombre
    })
})

// metodo delete

app.delete('/api/mensajes/:id',(req,res)=>{
    const{id}=req.params
    res.json({
        msj:'borrado el mensaje',
        id
    })
})

const PORT= process.env.PORT || 8080

const server = app.listen(PORT,()=>{
    console.log(`Escuchando en el puerto ${server.address().port}`)
})