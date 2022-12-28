import { getDao } from '../factory/productsDaoFactory.js'


class ProductsApi{

    constructor(){
        this.productsDao = getDao()
    }

    async getAll(){
        return await this.productsDao.getAll()
    }

    async getById(_id){
        return await this.productsDao.getById(_id)
    }

    async getByCategory(categories){
        return await this.productsDao.getByCategory(categories)
    }

    async saveProduct(data){
        return await this.productsDao.saveProduct(data)
    }

    async updateProduct(_id, data){
        return await this.productsDao.updateProduct(_id, data)
    }

    async deleteById(_id){
        return await this.productsDao.deleteById(_id)
    }

    async deleteAll(){
        return await this.productsDao.deleteAll()
    }
}

export default ProductsApi