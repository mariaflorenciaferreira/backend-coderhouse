const admin = require("firebase-admin")
const serviceAccount=require('../DB/archivosFirebase/ecommerce-6c62e-firebase-adminsdk-wvh9z-3790e0d02d.json')

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore()

class ContenedorFirebase {
	constructor(coll) {
        this.colleccion = db.collection(coll)
	}


	//traer todos los productos
	getAll = async () => {
        try {
            let products = await this.colleccion.get()
            return products.docs.map(document => ({
                id: document.id,
                ...document.data()
            }))
        } catch (error) {
			console.log(`Error al cargar productos: ${error}`)
        }
    }
	

	save = async (product) => {
		try {
			const data = await this.colleccion.doc()

            data.create(product)
            return product
		} catch (error) {
			console.log(`Error al guardar producto: ${error}`)
		}
	}

	// traer producto por id
	getById = async (id) =>  {
		try {
			
			let producto = await this.colleccion.doc(id).get()
			if (producto.data()) {
                const response = {
                    id: producto.id,
                    ...producto.data()
                }
                return response
            } else {
				console.log(`Producto no encontrado`)
            }
		} catch (error) {
			console.log(`Error al buscar producto por id ${error}`)
		}
	}
	
	
	// borrar todo
	deleteAll = async () => {
        try {
            await this.colleccion.doc().delete()
            console.log(`Productos eliminados`)
        } catch (err) {
			console.log(`Error al eliminar productos ${error}`)
        }
    }

	

	// eliminar producto por id
	deleteById = async (id)=> {
		try {
			let producto = await this.colleccion.doc(id).get()
			if (producto.data()) {
                await this.colleccion.doc(id).delete()
                console.log(`Producto ${id} eliminado`)
            } else {
                console.log(`Producto ${id} no encontrado`)
            }

		} catch (error) {
			console.log(`Error al eliminar el producto: ${id} : ${error}`)
		} 
	}

	update = async (id, product) => {
        try {
            let productU = await this.colleccion.doc(id).get()
            if (productU.data()) {
                await this.colleccion.doc(id).update(product);
                return product
            } else {
                console.log(`Producto ${id} no encontrado`)
            }
        } catch (error) {
            console.log(`Error al actualizar el producto: ${id} : ${error}`)
        }
    }
}

module.exports = ContenedorFirebase