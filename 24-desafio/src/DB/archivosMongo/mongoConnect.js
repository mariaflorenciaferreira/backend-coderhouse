const mongoose=require('mongoose')
require("dotenv").config()


const connectDB= async ()=>{
    try {
        const url= `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/clase24`
        
        
        await mongoose.connect(url,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        })
        console.log('mongodb conectada')

    } catch (error) {
        console.error(error)
    }
}

module.exports=connectDB