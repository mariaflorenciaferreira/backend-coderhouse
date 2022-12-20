import CartsDto, { asDto } from '../DTOs/Cart.DTO.js' 
import { getDao } from '../../factory/cartDaoFactory.js'


class CartsRepository{
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

    static async saveCart(data){
        const dto = await this.dao.saveCart(data)
        return asDto(dto)
    }

    static async updateCart(_id, data){
        const dto = await this.dao.updateCart(_id, data)
        return asDto(dto)
    }

    static async postProductToCart(_id, data){
        const dto = await this.dao.postProductToCart(_id, data)
        return asDto(dto)
    }

    
    
    static async deleteById(_id){
        await this.dao.deleteById(_id)
    }

    static async deleteAll(){
        await this.dao.deleteAll()
    }
}

export default CartsRepository