import express from 'express'
import { getTime } from './lib/utils'
import Persona from './persona'


const app=express()

const persona:Persona= new Persona('Juan','Perez')

app.get('/', (req,res)=>{
    res.send({ 
        time:getTime(),
        name:persona.getFullName()
    })
})

app.listen(4000,()=>{
    console.log('Server is running on port 4000')
})