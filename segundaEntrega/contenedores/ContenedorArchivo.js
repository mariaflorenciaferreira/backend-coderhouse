const fs=require('fs')



class ContenedorArchivo {
	constructor(route) {
		this.route = route
	}


	//traer todos los productos
    getAll = async () => {
        try {
            const products = await fs.promises.readFile(this.route, 'utf-8')
            return JSON.parse(products)
        } catch (error) {
            console.log(`Error al cargar los productos: ${error}`)
        }
    }

	save= async (product) => {
		try {
			const data=await this.getAll()
			const savedIds=[]
			let id
			let timestamp

			if(data.length>0){
				data.forEach(i => {
                    savedIds.push(i.id)
                })
				const queryId = Math.max.apply(null, savedIds)
                id = queryId + 1
                timestamp = Date.now()
                await fs.promises.writeFile(this.route, JSON.stringify([...data, {
                    ...product,
                    id: id,
                    timestamp: timestamp
                }], null, 2), 'utf-8')
				
			}else{
				id=1
				await fs.promises.writeFile(this.route, JSON.stringify([{
                    ...product,
                    id: id,
                    timestamp: timestamp
                }], null, 2), 'utf-8')
			}
			return { ...product,id:id, timestamp:timestamp}

		} catch (error) {
			console.log("Error save():", error)
		}
	}

	// traer producto por id
	getById= async (id)=> {
		try {
            let data = await this.getAll()
            const foundElement = data.find(element => element.id == id)


            if (foundElement !==undefined) {
                return foundElement
            } else {
                console.log(`Elemento id: ${id} no encontrado`)
                return null
                
            }
        } catch (error) {
            console.log(`Error getById(): ${error}`)
        }
    }

	deleteById = async (id) => {
        try {
            const data = await this.getAll()
            const product = await this.getById(id)
            if (product) {
                const deleteProduct = data.filter(p => p.id != id)
                await fs.promises.writeFile(this.route, JSON.stringify(deleteProduct, null, 2), 'utf-8')
                return(`Producto id: ${id} eliminado`)
            }
        } catch (error) {
            console.log(`Error deleteById(): ${error}`)
        }
    }

	deleteAll = async () => {
        try {
            const data = await this.getAll()
            if (data.length) {
                await fs.promises.writeFile(this.route, '[]', 'utf-8')
                return(`Productos eliminados`)
            } else {
                return(`Listado de productos vacio`)
            }
        } catch (error) {
			console.log(`Error deleteAll(): ${error}`)
		}
    }

	update = async (id, product) => {
        try {
            let data = await this.getAll()
            const objIndex = data.findIndex(item => item.id == id)
            if (objIndex >= 0) {
                const timestamp = Date.now()
                data[objIndex] = {
                    ...product,
                    id,
                    timestamp
                }
                await fs.promises.writeFile(this.route, JSON.stringify(data, null, 2, 'utf-8'))
                return product
            } else {
				console.log(`No puede actualizarse el producto ${id}, no se encuentra en listado`)
            }
        } catch (error) {
            console.log(`Error update(): ${error}`)
        }
    }

}

module.exports=ContenedorArchivo