import mongoose from 'mongoose'
import Products from '../../models/Product.Model.js' 
import {asDto} from '../DTOs/Products.DTO.js'
import dotenv from 'dotenv/config'

class ProductsMongoDbDao {
  constructor(){
    this.initialize()
  }
  
  initialize = async () => {
            await mongoose.connect(process.env.URL_CONNECTION).then(() =>  console.log('product db connected'))
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

    getByCategory= async (categories) =>{

      const rCategory=categories
      try {

        let products;

        if(rCategory){
          products=await Products.find({categories:{
            $in:[rCategory],
          }})
        }else{
          products=await Products.getAll()
          
        }
        
        return asDto(products)
        
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