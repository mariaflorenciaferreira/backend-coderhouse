const ContenedorMongoDB=require('../../contenedores/ContenedorMongoDB')
const UserModel=require('../../DB/archivosMongo/userModel')


class UserMongoDB extends ContenedorMongoDB{
    constructor(){
        super(UserModel)
    }

    getByUsername = async (username) => {
		try {
			let user = await this.model.findOne({ _username: username })

			if (producto) {
                return product
            } else {
				console.log(`Usuario ${username} no encontrado`)
            }
			
		} catch (error) {
			console.log(`No se encuentra el usuario ${id}: ${error}`)
		} 
	}
}

module.exports=UserMongoDB