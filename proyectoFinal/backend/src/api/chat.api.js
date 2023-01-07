import { getDao } from '../factory/chatDaoFactory.js'


class ChatsApi{

    constructor(){
        this.chatsDao = getDao()
    }

    async getAll(){
        return await this.chatsDao.getAll()
    }

    async getById(_id){
        return await this.chatsDao.getById(_id)
    }

    async saveChat(data){
        return await this.chatsDao.saveProduct(data)
    }

    async updateChat(_id, data){
        return await this.chatsDao.updateProduct(_id, data)
    }

    async deleteById(_id){
        return await this.chatsDao.deleteById(_id)
    }


}

export default ChatsApi