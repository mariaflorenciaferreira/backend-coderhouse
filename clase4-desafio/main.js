const Contenedor=require('./contenedor')


const producto= new Contenedor('./dataDesafio.txt')

producto.save({marca:'Telefono',precio:100,categoría:'smartphone'})

// producto.getById(4);

// producto.getAll()

// producto.delete(3)

// producto.deleteAll()