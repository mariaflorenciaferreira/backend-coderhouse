import mongoose from 'mongoose'
import Carts from '../../models/Cart.Model.js' 
import {asDto} from '../DTOs/Cart.DTO.js'

class CartsMongoDbDao {
    constructor(){
        this.initialize()
    }

    initialize = async () => {
            await mongoose.connect('mongodb+srv://Florencia:Florencia1@cluster0.apzqpkk.mongodb.net/clase40').then(() =>  console.log('cart db connected'))
        }

    getAll = async () => {
        try {
        const allCarts = await Carts.find({});
        return asDto(allCarts);
        } catch (error) {
            console.log(error)
        }
    }

    getById = async (_id) =>{
        try {
            const findCart = await Carts.findById({_id})
            return asDto(findCart)
        } catch (error) {
            console.log(error)
        }
    }

    saveCart = async (data) => {
        try {
            const newCart = new Carts(data)
            await newCart.save()
            return asDto(newCart)
        } catch (error) {
            console.log(error)
        }
    }

    updateCart = async (_id, data) => {
        try {
            const cart = await Carts.updateOne({_id}, data)
            return asDto(cart);
        } catch (error) {
            console.log(error)
        }
    }

    deleteById = async (_id) => {
        try {
            await Carts.deleteOne({_id})
        } catch (error) {
            console.log(error)
        }
    }

    deleteAll = async () => {
        try {
            await Carts.deleteMany({})
        } catch (error) {
            console.log(error)
        }
    }

}

export default CartsMongoDbDao