import productsDto, { asDto } from '../DTOs/Products.DTO.js' 
import { getDao } from '../../factory/productsDaoFactory.js'


class ProductsRepository{
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

  static async saveProduct(data){
    const dto = await this.dao.saveProduct(data)
    return asDto(dto)
  }

  static async updateProduct(_id, data){
    const dto = await this.dao.updateProduct(_id, data)
    return asDto(dto)
  }
  
  static async deleteById(_id){
    await this.dao.deleteById(_id)
  }

  static async deleteAll(){
    await this.dao.deleteAll()
  }
}

export default ProductsRepository