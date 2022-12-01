import supertest from 'supertest'
import app from '../../../index.js'
import axios from 'axios'



describe("GET /api/productos", ()=>{
    describe("get productos de la BD", ()=>{

        test("should respond with a 200 status code", async ()=>{
        const response= await axios.get('http://localhost:8080/api/productos')
        .then((result)=>{
            console.log(result.data.products)
        
        }).catch((error)=>{
            console.log(error)
        })
    })

})

describe("no hay productos en la BD", ()=>{

})


})
