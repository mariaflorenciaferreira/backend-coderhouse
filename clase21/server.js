import express from 'express' 

import { json } from 'express'
import usuariosRouter from './router/usuarios.js'


const app = express()
app.use(json())

app.use('/api/usuarios', usuariosRouter)

const PORT = process.env.PORT||4000

app.listen(PORT,()=>{
    console.log(`Escuchando en puerto ${PORT}`)
})