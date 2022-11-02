const fs=require('fs')
const ContenedorArchivo=require('../../contenedores/ContenedorArchivo')
const productosDaoArchivo=require('../productos/ProductosDaoArchivo')
const productosDao=new productosDaoArchivo()

class CarritosDaoArchivo extends ContenedorArchivo{
    constructor(){
        super('./DB/archivosDB/carritos.txt')
        console.log('Carritos conectados a archivo.json')
    }

    // metodos particulares carrito

	// nuevo carrito

	saveCart= async ()=>{
		try {
            const carritos = await this.getAll()
            const savedIds = []
            let id
            let timestamp

            if (carritos.length > 0) {
                carritos.forEach(i => {
                    savedIds.push(i.id)
                })

                const queryId = Math.max.apply(null, savedIds)
                id = queryId + 1
                timestamp = Date.now()

                await fs.promises.writeFile(this.route, JSON.stringify([...carritos, {
                    id: id,
                    timestamp: timestamp,
                    productos: []
                }], null, 2), 'utf-8')

            } else {
                id = 1
                timestamp = Date.now()
                await fs.promises.writeFile(this.route, JSON.stringify([{
                    id: id,
                    timestamp: timestamp,
                    productos: []
                }], null, 2), 'utf-8')
            }
            return {
                id: id,
                timestamp
            }
        } catch (error) {
			console.log(`Error al crear nuevo carrito: ${error}`)
		}
	}

    saveCartItem = async (id, product) => {
        try {
            let carts = await this.getAll()
            const objIndex = carts.findIndex(item => item.id == id)
            const producto = await productosDao.getById(product.id)
            if (carts[objIndex]) {
                if (producto.name) {
                    carts[objIndex].productos.push(producto)
                    await fs.promises.writeFile(this.route, JSON.stringify(carts, null, 2, 'utf-8'))
                    return carts[objIndex]
                } else {
                    return {
                        error: "Producto no encontrado"
                    }
                }
            } else {
                return {
                    error: "Carrito no encontrado"
                }
            }
        } catch (err) {
            throw new Error(`Error al guardar la información: ${err}`)
        }
    }

	

	deleteCartItem = async (id, product) => {
        try {
            let carts = await this.getAll()
            const objIndex = carts.findIndex(item => item.id == id)
            const producto = await productosDao.getById(product.id)
            if (carts[objIndex]) {
                if (producto.name) {
                    const deleteProduct = carts[objIndex].productos.filter(c => c.id != producto.id)
                    carts[objIndex].productos = deleteProduct
                    await fs.promises.writeFile(this.route, JSON.stringify(carts, null, 2, 'utf-8'))

                    return carts[objIndex]
                } else {
                    return {
                        error: "Producto no encontrado"
                    }
                }
            } else {
                return {
                    error: "Carrito no encontrado"
                }
            }
        } catch (err) {
            throw new Error(`Error al eliminar la información: ${err}`)
        }
    }




    async getCartById (id) {
        
    
        try {
            const carritos= await this.getAll()
            const carritoId = carritos.find(element => element.id == id)
            
            console.log({carritoId})
            return carritoId
        } catch (error) {
            console.log(`Carrito ${id} no existe`)
            return(`Carrito ${id} no existe}`)
        }
    }



}

module.exports=CarritosDaoArchivo