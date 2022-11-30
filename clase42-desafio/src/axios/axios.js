import axios from 'axios'

// axios.get('http://localhost:8080/api/productos')
// .then((result)=>{
//     console.log(result.data.products)

// }).catch((error)=>{
//     console.log(error)
// })

axios.post('http://localhost:8080/api/productos',{
    "title": "Producto 5",
    "price": 1000,
    "description": "quinto producto"
})
.then((result)=>{
    console.log(result.data)

}).catch((error)=>{
    console.log(error)
})


