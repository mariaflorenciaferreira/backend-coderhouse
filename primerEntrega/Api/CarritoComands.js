const fs= require('fs');
const { type } = require('os');


class Carrito{
    constructor(ruta){
        this.ruta=ruta
    }

    async save(object){

        const nuevoTS= new Date().getTime()
        let productosCarrito=[ ]
        try{
            let data = await fs.promises.readFile(this.ruta, 'utf8')
            let dataParse= JSON.parse(data)
            

            if(dataParse.length){ 
                await fs.promises.writeFile(this.ruta, JSON.stringify([...dataParse,{...object,timestamp:nuevoTS,productosCarrito:[...productosCarrito],id: dataParse[dataParse.length-1].id  + 1}],null,2))
                console.log(`El id del nuevo carrito es: ${dataParse.length+1}`)


            }else{
                await fs.promises.writeFile(this.ruta, JSON.stringify([{...object,id: 1}],null,2))
                console.log(`El id del carrito creado es: ${dataParse[dataParse.length-1].id  + 1}`)
                
            }
            const nuevoId=dataParse[dataParse.length-1].id  + 1
            console.log(nuevoId)
            return nuevoId

        }catch(error){
            console.log(error)
        }  
    }

    async updateById(obj){

        try{ 
            let data = await fs.promises.readFile(this.ruta, 'utf8')
            let dataParse= JSON.parse(data)
            const objIndex=dataParse.findIndex(prod=>prod.id===obj.id)


            if(objIndex!==-1){
                // existe

                dataParse[objIndex]=obj
                await fs.promises.writeFile(this.ruta,JSON.stringify([dataParse],null,2))
                
                console.log('carrito actualizado')
                return{msg:'actualizado', obj}

            }else{
                // no existe
                return{error:'no existe el carrito'}
            }



        }catch(error){
            console.log(error)
        }  
    }

    async addToCart(id, objectToAdd){


        const carritoCargar = await this.getById(Number(id))
        const nuevoTS= new Date().getTime()
        console.log(carritoCargar)
        
        try{
            if(carritoCargar){

                let newProd={id:carritoCargar.carritoId.id,nuevoTS,...objectToAdd}
                carritoCargar.carritoId.productosCarrito.push(newProd)

                const newCart =await this.updateById(parseInt(id),carritoCargar.carritoId)

                console.log(newCart)
                return newCart

            }else{
                let newProd={id:1,nuevoTS,...objectToAdd}
                carritoCargar.carritoId.productosCarrito.push(newProd)
                
                const newCart = await this.updateById(parseInt(id),carritoCargar.carritoId)

                
                return newCart
            }
        }catch(error){
            console.log(error)

        }
    }

    async getById(id){

        try {
            let data = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataParse= JSON.parse(data)
            let carritoId=dataParse.find(carritoId=>carritoId.id===id)
            
            if(carritoId){
                
                return({carritoId})
                
            }else{
                console.log("No se encontro el carrito por id")
            }
            

        } catch (error) {
            console.log(error)
        }
    }

    async getAllCarritos(){
        try {
            let data = await fs.promises.readFile(this.ruta, 'utf-8')
            let dataParse= JSON.parse(data)

            if(dataParse.length){
                console.log(dataParse)
                return(dataParse)
            }else{
                console.log(`no hay carritos guardados`)
            }

        } catch (error) {
            console.log(error)
        }

    }

    async delete(id){

        try {
            let data = await fs.promises.readFile(this.ruta, 'utf8')
            let dataParse= JSON.parse(data)

            let carritoId=dataParse.find(carritoId=>carritoId.id===id)
            
            if(carritoId){
                let dataFiltrado= dataParse.filter(carritoId =>carritoId.id!==id)
                await fs.promises.writeFile(this.ruta,JSON.stringify(dataFiltrado,null,2))
                console.log(`Carrito ${id} eliminado`)
                
            }else{
                console.log("El carrito no se encuentra en el listado")
            }

        } catch (error) {
            console.log(error)
        }
    }

    async deleteProds(id,idProduct){

        try {
            let data = await fs.promises.readFile(this.ruta, 'utf8')
            let dataParse= JSON.parse(data)

            let carrito=dataParse.find(carritoId=>carritoId.id===id)
            let producto=carrito.productosCarrito.find(producto=>productosCarrito.id===idProduct)
            
            if(producto){
                let dataFiltrado= dataParse.filter(producto =>productosCarrito.id==idProduct)
                carrito.productosCarrito=dataFiltrado
                console.log(`Producto ${id} eliminado`)
                
            }else{
                console.log("El producto no se encuentra en el carrito")
            }

        } catch (error) {
            console.log(error)
        }
    }

    async deleteAll(){

        await fs.promises.writeFile(this.ruta, JSON.stringify([],null,2))

    }
}

module.exports=Carrito;