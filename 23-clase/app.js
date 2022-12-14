const express=require("express")
const cookieParser=require("cookie-parser")
const session =require("express-session")
const logger = require("morgan")
const FileStore=require('session-file-store')(session)



const indexRouter=require('./src/routes/index')

require("dotenv").config()

const app=express()

app.use(logger('dev'))


app.use(session({
    secret:process.env.SESSION_SECRET ||'123456',
    resave:true,
    saveUninitialized:true,
    store:new FileStore({
        path:'./sessions',
        ttl:3600,
        retries:0
    })
}))



app.use(cookieParser(process.env.COOKIES_SECRET ||'123456'))
app.use(express.json())
app.use(express.urlencoded({ extended:true }))

app.use(indexRouter)



module.exports=app

