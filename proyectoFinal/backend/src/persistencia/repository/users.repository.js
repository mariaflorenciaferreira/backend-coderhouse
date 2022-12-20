import usersDto, { asDto } from '../DTOs/Users.DTO.js' 
import { getDao } from '../../factory/userDaoFactory.js'


class usersDto{
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

  static async saveUser(data){
    const dto = await this.dao.saveUser(data)
    return asDto(dto)
  }

  static async updateUser(_id, data){
    const dto = await this.dao.updateUser(_id, data)
    return asDto(dto)
  }
  
  static async deleteById(_id){
    await this.dao.deleteById(_id)
  }

  static async deleteAll(){
    await this.dao.deleteAll()
  }
}

export default usersDto