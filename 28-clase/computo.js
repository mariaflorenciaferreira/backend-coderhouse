 

const calculo = () => {
    // console.log('calculo')
    let suma = 0
    for(let i=0; i < 6e9; i++) {
        suma += i
    }
    return suma    
}

process.on('message', mesajeComputoSend => {
    console.log(mesajeComputoSend)
    process.send(`La suma es ${calculo()} (mesaje de process.on)`)
})

// calculo()
// console.log('calculo', calculo())
// module.exports = calculo
