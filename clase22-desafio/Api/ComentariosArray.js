const {options}=require('../Db/mariaDB/conexionDB')
const knex=require('knex')(options)

const {normalize,denormalize,schema}=require('normalizr')

const autorSchema= new schema.Entity("autor", {}, { idAttribute: "id" });
const commentSchema = new schema.Entity("comentario");
const mensajeSchema = [
	{
		authr: autorSchema,
		text: commentSchema
	}
];

class Contenedor{
    constructor(knex,name){
        this.knexMDB=knex,
        this.tableName=name
        this.init()
    }

    


    async init() {
        let existe = await this.knexMDB.schema.hasTable(this.tableName);

        if(!existe){
            try {
                await this.knexMDB.schema.createTable(this.tableName, (table) => {
                    table.increments('id')
                    table.string('nombreUsuario')
                    table.string('nombre')
                    table.string('apellido')
                    table.string('edad')
                    table.string('alias')
                    table.string('avatar')
                    table.string('comentario')
                    
                });
                console.log('tabla creada')
    
            } catch (error) {
                console.log(error)
            }
        }else{
            console.log('Trabajando sobre tabla mensajes existente')
        }
        
    }



    async save(object){



        this.knexMDB(this.tableName).insert(object)
        .then(object=>{console.log(object)})
        .catch(err=>console.log(`Eror al ingresar el mensaje - ${err}`))
        .finally(()=>this.knexMDB.destroy())

        
    }

    async getById(idMensaje){
        try {
            return await this.knexMDB
            .from(this.tableName)
            .select("*")
            .where("id", idMensaje)
            .limit(1);

        } catch (error) {
            console.log(`Eror al cargar el mensaje - ${error}`)
        }
    }

    async getAllComments(){
        try {
            const mensajes= await this.knexMDB.from(this.tableName).select("*");
            console.log(`-- MENSAJES --`)
            console.log(` ${JSON.stringify(mensajes)}`)
            console.log(`-- mensajes.length: ${mensajes.length}`)

            console.log(`-------------------------------------------------------`)

            const mensajesNormalizados=normalize(mensajes,mensajeSchema)
            console.log(`-- MENSAJES NORMALIZED --`)
            console.log(` ${JSON.stringify(mensajesNormalizados)}`)
            console.log(`-- mensajesNormalizados.length: ${JSON.stringify(mensajesNormalizados).length}`)

            console.log(`-------------------------------------------------------`)

            const mensajesDesnormalizados=denormalize(mensajesNormalizados.result,mensajeSchema, mensajesNormalizados.entities)
            console.log(`-- MENSAJES DENORMALIZED --`)
            console.log(` ${JSON.stringify(mensajesDesnormalizados)}`)
            console.log(`-- mensajesDesnormalizados.length: ${JSON.stringify(mensajesDesnormalizados).length}`)


            return await this.knexMDB.from(this.tableName).select("*");
        } catch (error) {
            return `Eror al cargar los mensajes - ${error}`;
        }

    }

    async delete(idMensaje){

        try {
            return await this.knexMDB.from(this.tableName).where("id", idMensaje).del();

        } catch (error) {
            console.log(`Error al borrar el mensaje - ${error}`)
        }
    }

    async deleteAll(){
        try {
            return await this.knexMDB.from(this.tableName).del();
        } catch (error) {
            return `Error al borrar el listado de mensajes - ${error}`;
        }

    }
}

module.exports=Contenedor;