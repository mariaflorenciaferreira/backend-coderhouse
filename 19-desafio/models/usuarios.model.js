const mongooose=require('mongoose')

const UsersSchema= new mongooose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        max:50
    },
    email:{
        type:String,
        required:true,
        trim:true,
        max:50,
        unique:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        max:50,
        
    }



})


module.exports=mongooose.model('Users',UsersSchema)