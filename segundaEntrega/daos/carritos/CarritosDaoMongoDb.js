const ContenedorMongoDB=require('../../contenedores/ContenedorMongoDB.js')
const CarritosModel=require('../../DB/archivosMongo/carritoModel.js')
const productosDaoMongoDB=require('../productos/ProductosDaoMongoDB.js')
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
            const cart = await this.getById(id)
            if (cart) {
                const producto = await productosDao.getById(product.id)
                if (producto.name) {cart.products.push({...product})
                    this.save(cart)
                    return cart
                } else {
                    return 'Producto no encontrado'
                }
            } else {
                return 'Carrito no encontrado'
            }
        } catch (err) {
            throw new Error(`Error al guardar la información: ${err}`)
        }
    }

    deleteCartItem = async (id, product) => {
        try {
            const cart = await this.getById(id)
            if (cart) {
                const found = cart.products.find(element => element.id == product.id)
                if (found) {
                    const deleteProduct = cart.products.filter(element => element.id != product.id)
                    cart.products = deleteProduct
                    this.save(cart)
                    return cart
                } else {
                    return 'Producto no encontrado'
                }
            } else {
                return 'Carrito no encontrado'
            }
        } catch (err) {
            throw new Error(`Error al eliminar la información: ${err}`)
        }
    }

    
}

module.exports=CarritoMongoDB