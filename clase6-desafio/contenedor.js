const fs= require('fs');

class Contenedor{
    constructor(ruta){
        this.ruta=ruta
    }

    async getAll(){
        try {
            let data = await fs.promises.readFile(this.ruta, 'utf8')
            let dataParse= JSON.parse(data)
    
            if(dataParse.length){
                return dataParse
            }else{
                console.log(`no hay productos`)
            }
    
        } catch (error) {
            console.log(error)
        }
    
    }

    async getProduct(id){
        try {
            let data = await fs.promises.readFile(this.ruta, 'utf8')
            let dataParse= JSON.parse(data)
            let productoId=dataParse.find(productoId=>productoId.id===id)
            
            if(productoId){
                return productoId
                
            }else{
                console.log("No se encontro el producto")
            }
            

        } catch (error) {
            console.log(error)
        }
    }
}

module.exports=Contenedor;

