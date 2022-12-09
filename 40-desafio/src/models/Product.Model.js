import {Schema, model} from 'mongoose' 

const ProductsSchema = new Schema({
  title: String,
  price: Number,
  description: String,
  image:String,
  stock: Number
})

const ProductsModel = model('products', ProductsSchema)

export default ProductsModel

