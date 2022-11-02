// const app=require('./app')
// const app=require('./appRedis')
const app=require('./appMongo')


const PORT=process.env.PORT|| 3000

app.listen(PORT,()=>{
    console.info(`Server up and running ${PORT}`)
})


