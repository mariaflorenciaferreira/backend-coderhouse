const mongoose=require('mongoose')


const CarritosSchema= new mongoose.Schema({
    timestamp: {
        type: Date,
        default: Date.now
    },
    products: {
        type: Array,
    }
})

module.exports=mongoose.model('Carritos', CarritosSchema)