import { getDao } from '../factory/cartDaoFactory.js'


class CartApi{

    constructor(){
        this.cartDao = getDao()
    }

    async getAll(){
        return await this.cartDao.getAll()
    }

    async getById(_id){
        return await this.cartDao.getById(_id)
    }

    async saveCart(data){
        return await this.cartDao.saveCart(data)
    }

    async updateCart(_id, data){
        return await this.cartDao.updateCart(_id, data)
    }

    async deleteById(_id){
        return await this.cartDao.deleteById(_id)
    }

    async deleteAll(){
        return await this.cartDao.deleteAll()
    }
}

export default CartApi