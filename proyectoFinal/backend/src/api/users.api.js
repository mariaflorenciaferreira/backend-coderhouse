import { getDao } from '../factory/userDaoFactory.js'


class UsersApi{

    constructor(){
        this.userDao = getDao()
    }

    async getAll(){
        return await this.userDao.getAll()
    }

    async getById(_id){
        return await this.userDao.getById(_id)
    }

    async saveUser(data){
        return await this.userDao.saveProduct(data)
    }

    async updateUser(_id, data){
        return await this.userDao.updateProduct(_id, data)
    }

    async deleteById(_id){
        return await this.userDao.deleteById(_id)
    }

    async deleteAll(){
        return await this.userDao.deleteAll()
    }
}

export default UsersApi