import OrderDto, { asDto } from '../DTOs/Order.DTO.js' 
import { getDao } from '../../factory/orderDaoFactory.js'


class OrdersRepository{
    constructor(){
        this.dao = getDao()
    }

    static async getAll(){
        const dto = await this.dao.getAll()
        return dto.map(el => asDto(el))
    }
    
    static async getById(_id){
        const dto = await this.dao.getById(_id)
        return asDto(dto)
    }

    static async saveOrder(data){
        const dto = await this.dao.saveOrder(data)
        return asDto(dto)
    }

    static async updateOrder(_id, data){
        const dto = await this.dao.updateOrder(_id, data)
        return asDto(dto)
    }

    static async deleteById(_id){
        await this.dao.deleteById(_id)
    }

}

export default OrdersRepository