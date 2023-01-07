import mongoose from 'mongoose'
import Chat from '../../models/Chat.Model.js'
import {asDto} from '../DTOs/Chat.DTO.js'
import dotenv from 'dotenv/config'

class ChatsMongoDbDao {
    constructor(){
        this.initialize()
    }
    
    initialize = async () => {
        await mongoose.connect(process.env.URL_CONNECTION).then(() =>  console.log('chat db connected'))
        }

    saveChat = async (data) => {
        try {
            const newChat = new Chat(data)
            await newChat.save()
            return asDto(newChat)
        } catch (error) {
            console.log(error)
        }
    }

    getById = async (_id) =>{
        try {
            const findChat = await Chat.findById({_id})
            return asDto(findChat)
        } catch (error) {
            console.log(error)
        }
    }

    getAll = async () => {
        try {
        const allChats = await Chat.find({});
        return asDto(allChats);
        } catch (error) {
            console.log(error)
        }
    }

    deleteById = async (_id) => {
        try {
            await Chat.deleteOne({_id})
        } catch (error) {
            console.log(error)
        }
    }

    updateChat = async (_id, data) => {
        try {
            const chat = await Chat.updateOne({_id}, data)
            return asDto(chat);
        } catch (error) {
            console.log(error)
        }
    }
}

export default ChatsMongoDbDao