const {carritoDao, productosDao} = require('../../daos/carritos/CarritosDaoMongoDb')


const getCarts = async (req, res) => {
    carritoDao.getAll()
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            console.log(err)
        })
}

const getCartById = async (req, res) =>{
    let id=req.params

    try {
        const carritos= await carritoDao.getAll()
        const carritoId = carritos.find(element => element.id == id)
        
        res.json({carritoId})
        return carritoId
    } catch (error) {
        res.json({error: `Carrito ${id} no existe`})
    }
}



const postCart = async (req, res) => {
    carritoDao.saveCart()
        .then(response => {
            res.json(response)
        })
        .catch(err => {
            console.log(err)
        })
}

const deleteCart = async (req, res) => {
    const {id} = req.params
    
    carritoDao.deleteById(id)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            console.log(err)
        })
}

const postProductToCart = async (req, res) => {
    const {id} = req.params
    const product = req.body

    carritoDao.saveCartItem(id, product)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            console.log(err)
        })
}

const deleteProductToCart = async (req, res) => {
    const {
        id
    } = req.params
    const product = req.body
    carritoDao.deleteCartItem(id, product)
        .then(response => {
            res.send(response)
        })
        .catch(err => {
            console.log(err)
        })
}


module.exports = {
    getCarts,
    getCartById,
    postCart,
    postProductToCart,
    deleteProductToCart,
    deleteCart
}