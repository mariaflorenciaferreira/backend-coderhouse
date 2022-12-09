const express=require("express")
const cookieParser=require("cookie-parser")
const session =require("express-session")
const logger = require("morgan")

const MongoStore=require('connect-mongo')


const indexRouter=require('./src/routes/index')

require("dotenv").config()

const app=express()

app.use(logger('dev'))

const MongoConfig={
    usenewUrlParser:true,
    useUnifiedTopology:true,

}


app.use(session({
    secret:process.env.SESSION_SECRET ||'123456',
    resave:true,
    saveUninitialized:true,
    // mongo compass
    // store:MongoStore.create({mongoUrl:'mongodb://localhost/sessions'})
    // mongo Atlas
    store:MongoStore.create({mongoUrl:`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}/sessions`,mongoOptions:MongoConfig})
    
}))



app.use(cookieParser(process.env.COOKIES_SECRET ||'123456'))
app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use(indexRouter)



module.exports=app

