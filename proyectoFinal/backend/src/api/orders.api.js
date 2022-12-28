import { getDao } from '../factory/orderDaoFactory.js'


class OrdersApi{

    constructor(){
        this.orderDao = getDao()
    }

    async saveOrder(data){
        return await this.orderDao.saveOrder(data)
    }

    async updateOrder(_id, data){
        return await this.orderDao.updateOrder(_id, data)
    }

    async deleteById(_id){
        return await this.orderDao.deleteById(_id)
    }

    async getById(_id){
        return await this.orderDao.getById(_id)
    }

    async getAll(){
        return await this.orderDao.getAll()
    }

}

export default OrdersApi