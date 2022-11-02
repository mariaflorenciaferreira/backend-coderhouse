const mongoose=require('mongoose')

const ProductosSchema= new mongoose.Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    name: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    thumbnail: {
        type: String,
        required: false,
    }
})

module.exports=mongoose.model('Productos', ProductosSchema)