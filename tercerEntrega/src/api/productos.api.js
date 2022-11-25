const productosFactoryDao=require('../daos/productos/ProductosDaoMongoDB')
const productos =require('../DB/modelosMongo/productoModel')

class ApiProductos{
    constructor(){
        this.productosDao= new productosFactoryDao()
    }

    async getAll(){
        return await this.productosDao.getAll()
    }
        
    async getById(_id){
        return await this.productosDao.getById(_id)
    }

    async saveProd(data){
        return await this.productosDao.save(data)
    }

    async updateProd(_id, data){
        return await this.productosDao.update(_id, data)
    }

    async delete(_id){
        return await this.productosDao.deleteById(_id)
    }
        


}

export default ApiProductos