// child process


// const {exec, execFile}=require('child_process')
// const { stdout, stderr } = require('process')

// exec('ls -lh',(err,stdout,stderr)=>{

//     if(err){
//         console.error(`exec error: ${err.message}`)
//         return
//     }

//     if(stderr){
//         console.err(`stderr: ${stderr}`)
//         return
//     }

//     console.log(`stdout: \n ${stdout}`)
// })

//  HIJO SIN FORK

const http =require('http')

// const calculo=()=>{
//     let suma=0

//     // for(let i=0; i<6e9; i++){
//     for(let i=0; i<10000; i++){
//         suma+=i
//     }
//     return suma
// }

// let visitas=0

// const server = http.createServer()
// server.on('request', (req, res) => {

//     let { url } = req

//     if(url === '/calcular'){
//         const sum=calculo()
//         res.end(`La suma es ${sum}`)

//     }else if(url === '/'){
//         res.end (`Visita nº ${++visitas}`)
//     }
    
// })

//  CON FORK 

// const { fork } = require('child_process')
// // const calculo = require('./computo.js')


// let visitas = 0

// const server = http.createServer()
// server.on('request', (req, res) => {
//     let { url } = req
//     if(url === '/calcular'){
//         const computo = fork('./computo.js')
//         // console.log(computo)
//         computo.send('start')

//         computo.on('message', mensaje => {
//             console.log(mensaje)
//             res.end(mensaje)
//         })
        
//         // res.end(`La suma es `)
//     }else if(url === '/'){        
//         res.end(`Ok ${++visitas}`)
//     }
// })




// const PORT = 8000

// server.listen(PORT, err => {
//     if(err) throw new Error(err)
//     console.log(`Server listening on port ${PORT}`)
// })

