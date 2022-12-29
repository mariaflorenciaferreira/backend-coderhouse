import { getDao } from '../factory/messagesDaoFactory.js'


class MessagesApi{

    constructor(){
        this.msgDao = getDao()
    }

    async getAll(){
        return await this.msgDao.getAll()
    }

    async getById(_id){
        return await this.msgDao.getById(_id)
    }



    async saveMsg(data){
        return await this.msgDao.saveMsg(data)
    }

    async deleteById(_id){
        return await this.msgDao.deleteById(_id)
    }

    async deleteAll(){
        return await this.msgDao.deleteAll()
    }
}

export default MessagesApi