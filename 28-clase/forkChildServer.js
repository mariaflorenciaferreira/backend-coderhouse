// server


// const {fork}=require('child_process')
// const forked=fork('./child.js')

// forked.on('message', (message) => {
//     console.log('Mensaje del proceso hijo: ', message)
// })

// console.log('Comienzo del Programa Padre')

// setTimeout(() => {
//     forked.send('Hola¡¡¡')
// }, 2000)



import {fork} from 'child_process'

const forked = fork('./child.js')

forked.on('message', (message) => {
    if (message === 'listo') {
        forked.send('Hola¡¡¡')
    } else {
        console.log('Mensaje del proceso hijo: ', message)
        
    }
})

