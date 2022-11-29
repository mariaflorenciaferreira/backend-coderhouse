import {Schema, model} from 'mongoose' 

const ProductsSchema = new Schema({
  title: String,
  price: Number,
  description: String,
  stock: Number
})

const ProductsModel = model('prods', ProductsSchema)

export default ProductsModel

