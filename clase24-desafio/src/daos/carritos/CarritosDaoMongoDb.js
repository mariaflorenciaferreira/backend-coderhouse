const ContenedorMongoDB=require('../../contenedores/ContenedorMongoDB')
const CarritosModel=require('../../DB/archivosMongo/carritoModel')
const productosDaoMongoDB=require('../productos/ProductosDaoMongoDB')
const productosDao=new productosDaoMongoDB


class CarritoMongoDB extends ContenedorMongoDB{
    constructor(){
        super(CarritosModel)
    }

    // metodos particualares carrito

    saveCart = async () => {
        try {
            await this.save()
            
            console.log('Carrito creado')

        } catch (error) {
            console.log(`Error al crear el carrito: ${error}`)
        }
    }

    saveCartItem = async (id, product) => {
        try {
            const carrito = await this.getById(id)
            if (carrito) {
                const producto = await productosDao.getById(product.id)
                if (producto.name) {
                    carrito.products.push({
                        ...product
                    })
                    this.save(carrito)
                    return carrito
                } else {
                    console.log(`Producto ${id} no encontrado`)
                }
            } else {
                console.log(`Carrito ${id} no encontrado`)
            }
        } catch (error) {
            console.log(`Error al guardar el producto: ${error}`)
        }
    }

    deleteCartItem = async (id, product) => {
        try {
            const carrito = await this.getById(id)
            if (carrito) {
                console.log(typeof(id))
                const carritoId = carrito.products.find(element => element.id == product.id)
                if (carritoId) {
                    const deleteProduct = carrito.products.filter(element => element.id != product.id)
                    carrito.products = deleteProduct
                    this.save(carrito)
                    console.log(`${carrito}`)
                } else {
                    console.log(`Producto: ${id} no encontrado`)
                }
            } else {
                console.log(`Carrito: ${id} no encontrado`)

            }
        } catch (err) {
            console.log(`Error al borrar el producto: ${error}`)
        }
    }

    
}

module.exports=CarritoMongoDB