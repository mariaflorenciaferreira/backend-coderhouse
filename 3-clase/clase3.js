const fs = require('fs')

const leerArchivo= async()=>{
    try{
        const contenido=await fs.promises.readFile('./prueba.txt','utf-8')

        const objetoArchivo= JSON.parse(contenido)
        console.log(objetoArchivo.contenidoObj)

        objetoArchivo.contenidoObj.author="Coderhouse"
        const autor =  objetoArchivo.contenidoObj.author
        
        
        console.log(`El autor es ${autor}`)

    }catch(error){
        console.log(error)
    }
}

leerArchivo()

