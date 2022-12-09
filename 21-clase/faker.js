const express =require ('express') 
const {faker} =require ('@faker-js/faker')
const {writeFile} =require ('fs')

const app=express()

faker.locale='es'
const {name,internet,random}=faker


    let str='NOMBRE;APELLIDO;EMAIL;TRABAJO;LUGAR\n'
    
    
    app.get('/',(req,res)=>{
        for(let i=0;i<100;i++){
            str +=name.firstName()+
            ';'+ name.lastName()+
            ';'+ internet.email()+
            ';'+ name.jobTitle()+
            ';'+ random.locale()+
            '\n'
        }
        
        writeFile('./test.csv', str,err=>{
        if (err)console.log(err)
        console.log('archivo guardado')
        
    })
        res.send('archivo guardado') 
    })