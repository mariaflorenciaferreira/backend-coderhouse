import mongoose from 'mongoose'
import Carts from '../../models/Cart.Model.js' 
import Products from '../DAOs/ProductsMongoDb.DAO.js'
import {asDto} from '../DTOs/Cart.DTO.js'
import dotenv from 'dotenv/config'

const products= new Products()

class CartsMongoDbDao {
    constructor(){
        this.initialize()
    }

    initialize = async () => {
            await mongoose.connect(process.env.URL_CONNECTION).then(() =>  console.log('cart db connected'))
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

    postProductToCart=async(_id,product)=>{
        try {
            const cart = await Carts.findById(_id)
            if (cart) {
                // console.log(cart)
                const producto = await products.getById(product.id)
            

                if (producto.title) {
                    
                    const newProd=cart.products.push({...producto})
                    const data=cart.products
                    console.log(data)

                    const newCart= await Carts.findByIdAndUpdate({_id},{products:data})
                    
                    
                    return newCart
                } else {
                    return 'Product not found'
                }
            } else {
                return 'Cart not found'
            }
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