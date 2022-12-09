const express= require('express')
const {Router}=express


const app=express()
const routerUsuarios=Router()


app.use(express.json())
app.use('/static',express.static(__dirname+'public'))
app.use(express.static('file'))


app.use((req,res,next)=>{
    console.log('Time: ', Date.now());
    next()

})

routerUsuarios.use((req,res,next)=>{
    console.log('Time: ', Date.now());
    next()

})


const funcMidUno= (req,res,next)=>{
    req.mensaje1='Hola'
    next()
}

const funcMidDos= (req,res,next)=>{
    req.mensaje2='mundo'
    next()
}


// usuarios

const arrayPersonas=[]

routerUsuarios.get('/',funcMidUno,funcMidDos ,(req,res)=>{
    const {mensaje1,mensaje2}=req
    
    // console.log(mensaje1)
    // console.log(__dirname)
    res.json({
        ok:true,
        msj: mensaje1 + ' '+ mensaje2,
        personas: arrayPersonas
    })

    // res.sendFile(__dirname+'/public/index.html')
})

routerUsuarios.post('/',(req,res)=>{
    const {nombre,email} =req.body
    

    res.json({
        ok:true,
        msj:'todo bien en post',
        persona:[...arrayPersonas, {nombre, email}]
    })
})

// routerUsuarios.get('/:id',(req,res)=>{
//     const {id}=req.params
//     res.json({
//         ok:true,
//         msj:'todo bien el get con id',
//         id
//     })
// })

app.use('/api/usuarios',routerUsuarios)
app.use('/api/personas',routerUsuarios)

app.use((err,req,res,next)=>{
    console.error(err.stack);
    res.send({err})

})



const PORT=process.env.PORT||4000

app.listen(PORT,()=>{
    console.log('server is running')
})