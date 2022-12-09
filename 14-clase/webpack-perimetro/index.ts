import express from 'express'
import Perimetro from './Perimetro'



const app=express()


app.get('/perimetro', (req,res)=>{

    const {lado,figura}=req.query
    
    if (figura==='cuadrado'){
        const perimetro=new Perimetro(Number(lado))
        res.send(`El perimetro del cuadrado es ${perimetro.perimetroCuadrado}`)
    }

    if (figura==='circulo'){
        const perimetro=new Perimetro(Number(lado))
        res.send(`El perimetro del circulo es ${perimetro.perimetroCirculo}`)
    }

    if (figura==='rectangulo'){
        const perimetro=new Perimetro(Number(lado))
        res.send(`El perimetro del rectangulo es ${perimetro.perimetroCirculo}`)
    }

    

    
})

app.listen(4000,()=>{
    console.log('Server is running on port 4000')
})
