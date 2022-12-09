var admin = require("firebase-admin");

var serviceAccount = require("./ecommerce-6c62e-firebase-adminsdk-wvh9z-3790e0d02d.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

console.log('conexion a firebase')

const CRUD= async ()=>{
    const db=admin.firestore()
    query=db.collection('usuarios')

    // crear doc

    try {
        // let id=2
        // const doc=query.doc(`${id}`)
        // await doc.create({
        //     nombre:'jose2',
        //     apellido:'perez2',
        //     edad:20,
        //     email:'j2@gmail.com'

        // })
        // console.log('usuario creado')


        // leer doc
        const queryRead=await query.get()
        const respuesta=queryRead.docs.map(document => ({id:document.id, ...document.data()}))
        console.log(respuesta)

        // // actualizar doc
        // const id='2'
        // const doc=query.doc(id)
        // const item=await doc.update({
        //     nombre:'jose4'
        // })

        // borrar doc
        const id='2'
        const doc=query.doc(id)
        const item=await doc.delete()
        console.log('archivo eliminado')



    } catch (error) {
        console.log(error)
    }
}

CRUD()