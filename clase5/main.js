// let obj={}

// const agregar=(numero)=>{
//     if (typeof obj[numero]==='undefined') {
//         obj[numero]=1
//     } else {
//         obj[numero]++
    
//     }

// }

// for(let index=0;index<1000;index++){

//     const elemento= Math.ceil(Math.random()*20)
    

//     agregar(elemento)
// }

// console.log(obj)

const moment=require('moment')

const fechaHoy=moment().format('DD/MM/YYYY');
console.log(`Hoy es: ${fechaHoy}` )



const calcularNacimiento=(fecha)=>{
    
    

    const años=moment(fecha, "DDMMYYYY").fromNow();
    console.log(`Han pasado ${años} desde el nacimiento`)
}

calcularNacimiento("03/09/1994")