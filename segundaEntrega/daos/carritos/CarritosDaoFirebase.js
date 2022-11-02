const admin=require('firebase-admin')
const ContenedorFirebase = require('../../contenedores/ContenedorFirebase')
const productosDaoFirebase=require('../productos/ProductosDaoFirebase')
const productosDao=new productosDaoFirebase()

class CarritoDaoFirebase extends ContenedorFirebase {
	constructor() {
		super('carritos')
        console.log('Documento carritos conectado a firebase')
	}

	// metodos particualares carrito
    
	saveCart = async () => {
		try {
			const doc = this.colleccion.doc()
			await doc.create({
				timestamp: admin.firestore.FieldValue.serverTimestamp(),
				products: [],
			})
            let newDoc=JSON.stringify(doc)
            console.log(`Carrito creado id: ${doc.id}`) 
		} catch (error) {
			console.log(`Error al guardar la información: ${error}`)
		}
	}

	
	saveCartItem = async (id, product) => {
        try {
            const cart = await this.getById(id)
            if (cart) {
                const producto = await productosDao.getById(product.id)
                console.log(product.id)

                if (producto) {cart.products.push({...product})
                    await this.update(id, cart)
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
                    await this.update(id, cart)
                    return cart
                } else {
                    return 'Producto no encontrado'
                }
            } else {
                return 'Carrito no encontrado'
            }
        } catch (err) {
            console.log(`Error al borrar productos: ${err}`)
        }
    }

}



module.exports = CarritoDaoFirebase