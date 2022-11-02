const express=require('express')
const {Router}=express
const dotenv=require('dotenv').config()

const Users=require('./models/usuarios.model')
const connectDB = require('./mongoDB/connection')


const app=express()
const router=Router()

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

// crear usuario

router.get('/', async (req,res)=>{

    let usuario=new Users({
        name:'Juan2',
        email:'J2@gmail.com',
        password:'12445'
    })
    await usuario.save()
    console.log('usuario creado')

    // ver todos los usuarios
    const usuarios=await Users.find()
    console.table(usuarios)
    
    res.send('api usuarios')

})

// crear usuario
router.post('/users',async (req,res)=>{

    const {name, email, password}=req.body 
    new Users({name, email, password}).save()

    console.log(`usuario ${name} creado`)    

})


// eliminar usuario
router.delete('/',async (req,res)=>{
    await Users.deleteOne({name:'Juan'})
    console.log('usuario eliminado')

    const usuarios=await Users.find()
    console.log(usuarios)
})


// actualizar usuario
router.put('/',async(req,res)=>{
    const {name, email}=req.body 
    await Users.updateOne({name}, {$set:{email}})  
    console.log('usuario actualizado')
})


// buscar usuario
router.get('/usuario',async(req,res)=>{

    //filtro
    let usuario1= await Users.find({name:'Jose1'}, {name:1, email:1,_id:0})  
    let usuario2= await Users.find({name:'Jose1'}, {name:1, email:1,_id:0})  
    console.log(`Usuarios filtrados: ${usuario1} + ${usuario2}` )

    // ordeno
    console.log(`READ AND SORT`)
    console.log(await Users.find({},{name:1,_id:0}).sort({name:1}))

    // ordeno y salteo
    console.log(`READ AND SKIP`)
    console.log(await Users.find({},{name:1,_id:0}).sort({name:-1}).skip(1))

})


app.use('/api/usuarios',router)


// config puerto
const PORT =4000
app.listen(PORT,()=>{
    console.log(`Escuchando en puerto ${PORT}`)
})