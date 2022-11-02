// child forkChild

// let contador = 0

// process.on('message', mensaje => {
//     console.log('Mensaje del proceso Padre',mensaje)
//     setInterval(() => {
//         // contador++
//         process.send({contador: contador++})
//     }, 1000)

// })


process.on('message', mensaje => {
    console.log('Mensaje del proceso Padre',mensaje)
    process.send('Mundo')
    process.exit()

})

process.send('listo')
