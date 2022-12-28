import mongoose from 'mongoose'
import Users from '../../models/User.Model.js' 
import {asDto} from '../DTOs/Users.DTO.js'
import dotenv from 'dotenv/config'

class UsersMongoDbDao {
  constructor(){
    this.initialize()
  }
  
  initialize = async () => {
            await mongoose.connect(process.env.URL_CONNECTION).then(() =>  console.log('user db connected'))
        }

    getAll = async () => {
      try {
      const allUsers = await Users.find({});
      return asDto(allUsers);
      } catch (error) {
        console.log(error)
      }
    }

    getById = async (_id) =>{
      try {
        const findUser = await Users.findById({_id})
        return asDto(findUser)
      } catch (error) {
        console.log(error)
      }
    }

    saveUser = async (data) => {
      try {
        const newUser = new Users(data)
        await newUser.save()
        return asDto(newUser)
      } catch (error) {
        console.log(error)
      }
    }

    updateUser = async (_id, data) => {
      try {
        const user = await Users.updateOne({_id}, data)
        return asDto(user);
      } catch (error) {
        console.log(error)
      }
    }

    deleteById = async (_id) => {
      try {
        await Users.deleteOne({_id})
      } catch (error) {
        console.log(error)
      }
    }

    deleteAll = async () => {
      try {
        await Users.deleteMany({})
      } catch (error) {
        console.log(error)
      }
    }

    }

export default UsersMongoDbDao