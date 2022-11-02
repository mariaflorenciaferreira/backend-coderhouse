const express = require("express");
const dotenv=require('dotenv').config()
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const routerProductos=require('./routes/producto.routes')
const routerCarrito=require('./routes/carrito.routes')

// rutas
const indexRouter=require('./routes/index.routes')
app.use(indexRouter)


// rutas no definidas
app.get("*", (req, res) => {
    res.send(`Ruta ${req.url} inexistente`)
})

// puerto
const PORT = process.env.PORT || 8080

const server = app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`)
});
server.on("error", (error) => {
    console.log(`Error al cargar el puerto: ${(error)}`)
});