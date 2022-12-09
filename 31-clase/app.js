const express = require('express');
const compression=require('compression')

const app=express()
const port=4000

// app.use(compression())

// const data=('hola mundo').repeat(100000)


// app.get('/', (req, res) => {
//     // console.log(data)
//     res.send(data)
// })

const data = ('Hola que tal').repeat(1000);

app.get('/saludo', (req, res) => {
    console.log(data)
    res.send(data)

})



app.get('/saludozip',compression(), (req, res) => {
    console.log(data)
    res.send(data)

})


app.listen(port, err => {

    if(err){
        console.log(`error ${err}`)
    }
    console.log(`Listening on port ${port}`)
})
