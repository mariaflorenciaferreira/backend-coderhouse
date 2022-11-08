const connectDB=require('../DB/connect-mongo')



class ContenedorMongoDB {
	constructor(model) {
		this.model = model
	}

	getAll = async () => {
		try {
			let datos = await this.model.find({})
			return datos

		} catch (error) {
			console.log(`No se pueden leer los productos ${id}`)
			return []
		} 
	}

	save = async (product) => {
		try {

			let guardar = new this.model(product)
			await guardar.save()

			return (` Id del producto guardado: ${guardar.id.toString()}`)
		} catch (error) {
			console.log(`Error no se pudo guardar el producto: ${error}`)
		}
	}

	
	getById = async (id) => {
		try {
			let producto = await this.model.findOne({ _id: id })

			if (producto) {
                return producto
            } else {
				console.log(`Producto ${id} no encontrado`)
            }
			
		} catch (error) {
			console.log(`No se encuentra el producto ${id}: ${error}`)
		} 
	}

	deleteAll = async () => {
        try {
            await this.model.deleteMany({})
            console.log(`Productos eliminados`)
            return(`Productos eliminados`)
        } catch (error) {
            console.log(`Error al eliminar todos los productos: ${error}`)
            return(`Error al eliminar todos los productos: ${error}`)
        }
    }



	deleteById = async (id) =>  {
		try {
			let producto = await this.model.findOne({_id: id});
            
			if (producto) {
                await this.model.deleteOne({_id: id})
                console.log(`Producto id ${id} eliminado`)
                return(`Producto id ${id} eliminado`)
            } else {
                console.log(`No existe el producto ${id}`)
                return(`No existe el producto id ${id}`)
            }
		} catch (error) {
			console.log(`Error al eliminar el producto ${id}: ${error}`)
		} 
	}

	update = async (id, product) =>  {
		try {
			let producto = await this.model.findOne({_id: id});
            
			if (producto) {
                await this.model.updateOne({_id: id},{$set: {
                        name: product.name,
                        price: product.price,
                        img: product.img
                    }
                })
                return product
			}else{
				console.log(`Producto ${id} no encontrado`)
			}

		} catch (error) {
			console.log(`No se puede actualizar el producto ${id}`)
		}
	}
}

module.exports = ContenedorMongoDB;