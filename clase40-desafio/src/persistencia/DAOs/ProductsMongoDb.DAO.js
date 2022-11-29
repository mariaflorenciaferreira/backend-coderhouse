import mongoose from 'mongoose'
import Products from '../../models/Product.Model.js' 
import {asDto} from '../DTOs/Products.DTO.js'

class ProductsMongoDbDao {
  constructor(){
    this.initialize()
  }
  
  initialize = async () => {
            await mongoose.connect('mongodb://localhost:27017/clase40').then(() =>  console.log('db connected'))
        }

    getAll = async () => {
      try {
      const allProducts = await Products.find({});
      return asDto(allProducts);
      } catch (error) {
        console.log(error)
      }
    }

    getById = async (_id) =>{
      try {
        const findProduct = await Products.findById({_id})
        return asDto(findProduct)
      } catch (error) {
        console.log(error)
      }
    }

    saveProduct = async (data) => {
      try {
        const newProduct = new Products(data)
        await newProduct.save()
        return asDto(newProduct)
      } catch (error) {
        console.log(error)
      }
    }

    updateProduct = async (_id, data) => {
      try {
        const product = await Products.updateOne({_id}, data)
        return asDto(product);
      } catch (error) {
        console.log(error)
      }
    }

    deleteById = async (_id) => {
      try {
        await Products.deleteOne({_id})
      } catch (error) {
        console.log(error)
      }
    }

    deleteAll = async () => {
      try {
        await Products.deleteMany({})
      } catch (error) {
        console.log(error)
      }
    }

    }

export default ProductsMongoDbDao