import axios from 'axios'
let url = 'http://localhost:8080/api/productos';

const getProducts = () => {
    axios.get(`${url}`)
    .then((result)=>{
        console.log(result.data.products)

    }).catch((error)=>{
        console.log(error)
    })
};

const getProductById =  (id) => {
    axios.get(`${url}/${id}`)
    .then((result)=>{
        console.log(result.data)

    }).catch((error)=>{
        console.log(error)
    })
};


const newProduct = {
    title: 'producto 10',
    price: 1000,
    description: 'decimo producto',
    stock: 10,
};

const addProduct =  () => {
    axios.post(url,newProduct)
    .then((result)=>{
        console.log(result.data)

    }).catch((error)=>{
        console.log(error)
    })
}

const deleteProduct =  (id) => {
    axios.delete(`${url}/${id}`)
    .then((result)=>{
        console.log(result.data)

    }).catch((error)=>{
        console.log(error)
    })
};

const deleteAll =  () => {
    axios.delete(url)
    .then((result)=>{
        console.log(result.data)
    }).catch((error)=>{
        console.log(error)
    })
};



// getProducts()
// getProductById('638679e95560ef54762576a7')
// addProduct(newProduct)
// deleteProduct('6387d70bd4bd96419b6bf76e')
// deleteAll()


