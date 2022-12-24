import {Schema, model} from 'mongoose' 

const ProductsSchema = new Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, },
    img: { type: String, required: true },
    categories: { type: Array },
    stock:{ type: Number, required: true },
    price: { type: Number, required: true },
    
  },
  { timestamps: true }
)

const ProductsModel = model('products', ProductsSchema)

export default ProductsModel

