// console.log ('hola')

// const http =require('http')

// const server = http.createServer((peticion,res)=>{

//     const hora=new Date().getHours()


//     if (hora>=6 && hora<=12){
//         res.end('<h1>Buenos días!</h1>');
//     }else if(hora>=13 && hora<=19){
//         res.end('<h1>Buenas tardes!</h1>');
//     }else{
//         res.end('<h1>Buenas noches!</h1>');
//     }

    
// })

// const createdServer=server.listen(8080,()=>{
//     console.log(server.address())
//     console.log(`Escuchando el puerto: ${server.address().port}`)
// })

const express=require('express')

const app=express()
console.log(app)