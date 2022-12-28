import mongoose from 'mongoose'
import Orders from '../../models/Order.Model.js' 
import {asDto} from '../DTOs/Order.DTO.js'
import dotenv from 'dotenv/config'

class OrdersMongoDbDao {
  constructor(){
    this.initialize()
  }
  
  initialize = async () => {
            await mongoose.connect(process.env.URL_CONNECTION).then(() =>  console.log('order db connected'))
        }


  saveOrder= async (data) => {
    try {
      const newOrder = new Orders(data)
      await newOrder.save()
      return asDto(newOrder)
    } catch (error) {
      console.log(error)
    }
  }

  updateOrder= async (_id, data) => {
    try {
      const order = await Orders.updateOne({_id}, data)
      return asDto(order);
    } catch (error) {
      console.log(error)
    }
  }

  deleteById = async (_id) => {
    try {
      await Orders.deleteOne({_id})
    } catch (error) {
      console.log(error)
    }
  }

  deleteAll = async () => {
    try {
      await Orders.deleteMany({})
    } catch (error) {
      console.log(error)
    }
  }

  getById = async (_id) =>{
    try {
      const findOrder = await Orders.findById({_id})
      return asDto(findOrder)
    } catch (error) {
      console.log(error)
    }
  }

  
  getAll = async () => {
    try {
    const allOrders = await Orders.find({});
    return asDto(allOrders);
    } catch (error) {
      console.log(error)
    }
  }
}


export default OrdersMongoDbDao