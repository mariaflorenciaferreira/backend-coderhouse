const express=require('express')
const jwt=require('jsonwebtoken')

const PRIVATE='mysecret'
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const Users=[{id:1,username:'admin',password:'1234', email:'A@gmail.com'}]


const generarToken= (user) =>{
    const token=jwt.sign({data: user}, PRIVATE, {expiresIn:'24h'})
    return token

    
}

const auth=(req,res,next)=>{
    const token= req.headers.authorization
        if(!token){
        res.status(401).json({error:`Usuario no autorizado`})
        }

        jwt.verify(token,PRIVATE,(err,decoded)=>{

            if(err){
                res.status(401).json({err:`Usuario no autorizado`})
            }

            req.user=decoded.data
            console.log(decoded)
        })
    next()
}


app.get('/users',auth,(req,res)=>{
    res.send('hello world')
})

app.post('/register',(req,res)=>{
    const {username,password,email}=req.body
    // console.log(user)

    let user=Users.find(user=>user.username===username)

    if(user){
        res.json({error:'Usuario ya registrado'})
    }

    user={username,password,email}

    // AGREGAR
    // bycryp.hash(password,10(err,hash)=>{})
    Users.push(user)

    const accesToken=generarToken({username,email})
    res.json(`${accesToken}`)
})


app.post('/login',(req,res)=>{
    const {username,password,email}=req.body
    // console.log(user)

    let user=Users.find(user=>user.username===username && user.password===password)

    if(!user){
        res.json({error:'Datos incorrectos'})
    }


    const accesToken=generarToken({username})
    res.json(`${accesToken}`)

})




app.listen(4000,()=>{
    console.log(`Server running`)
})