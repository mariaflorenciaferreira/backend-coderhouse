import mongoose from 'mongoose'
import Messages from '../../models/Message.Model.js' 
import {asDto} from '../DTOs/Messages.DTO.js'
import dotenv from 'dotenv/config'

class MessageMongoDbDao {
  constructor(){
    this.initialize()
  }
  
  initialize = async () => {
            await mongoose.connect(process.env.URL_CONNECTION).then(() =>  console.log('message db connected'))
        }

    getAll = async () => {
      try {
      const allMsg = await Messages.find({});
      return asDto(allMsg);
      } catch (error) {
        console.log(error)
      }
    }

    getById = async (_id) =>{
      try {
        const userMsg = await Messages.findById({_id})
        return asDto(userMsg)
      } catch (error) {
        console.log(error)
      }
    }


    saveMsg = async (data) => {
      try {
        const newMsg = new Messages(data)
        await newMsg.save()
        return asDto(newMsg)
      } catch (error) {
        console.log(error)
      }
    }


    deleteById = async (_id) => {
      try {
        await Messages.deleteOne({_id})
      } catch (error) {
        console.log(error)
      }
    }

    deleteAll = async () => {
      try {
        await Messages.deleteMany({})
      } catch (error) {
        console.log(error)
      }
    }

    }

export default MessageMongoDbDao