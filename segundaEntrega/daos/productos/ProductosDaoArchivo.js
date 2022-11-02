const ContenedorArchivo=require('../../contenedores/ContenedorArchivo.js')


class ProductosDaoArchivo extends ContenedorArchivo {
    constructor() {
        super('./DB/archivosDB/productos.txt')


    }

    
}

module.exports = ProductosDaoArchivo