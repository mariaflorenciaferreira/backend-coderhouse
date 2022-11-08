const mongoose=require('mongoose')


const connectDB= async ()=>{
    try {
        const url= 'mongodb+srv://Florencia:Florencia1@cluster0.apzqpkk.mongodb.net/segundaEntrega'
        
        
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