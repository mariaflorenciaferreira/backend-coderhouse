const Koa=require('koa')
const {KoaBody, default: koaBody}=require('koa-body')
const routerBooks=require('./books.routes')

const app=new Koa()
app.use(koaBody())




// app.use(async ctx => {
//     ctx.body = 'Hello World';
// });

app.use(routerBooks.routes());

const PORT=4000

const server=app.listen(PORT,()=>{
    console.log(`Server on port ${server.address().port}`)
})

server.on('error',err=> console.log(`Error en el servidor ${err}`))