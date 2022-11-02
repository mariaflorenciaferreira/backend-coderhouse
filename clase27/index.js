
//  PROCESS.ARGV
    
// console.log(process.argv)
// // console.log(process.argv[1])

// const array= process.argv
// array.forEach((item,index)=>{
//     console.log(`${index} - ${item}`)
// })


// MINIMIST

const parseArgs= require('minimist')

// const args=parseArgs(process.argv.slice(2))
// console.log(args)

// console.log(parseArgs(['1', '2', '3', '4']));
// { _: [ 1, 2, 3, 4 ] }

// console.log(parseArgs(['-a', '1', '-b', '2', '3', '4']));
// // { _: [ 3, 4 ], a: 1, b: 2 }

// console.log(parseArgs(['--n1', '1', '--n2', '2', '3', '4']));
// // { _: [ 3, 4 ], n1: 1, n2: 2 }

// console.log(parseArgs(['-a', '1', '-b', '2', '--colores', '--cursiva']));
// // { _: [], a: 1, b: 2, colores: true, cursiva: true }

// console.log(parseArgs(['-a', '1', '-b', '2', '-c', '-x']));
// // { _: [], a: 1, b: 2, c: true, x: true }


// const options = { default: { nombre: 'pepe', apellido: 'copado' }}

// console.log(parseArgs(['-a', '1', '-b', '2', 'un-valor-suelto', '--nombre', 'juanita'], options));
// { _: [ 'un-valor-suelto' ], a: 1, b: 2, nombre: 'juanita', apellido: 'copado' }


// const options = { alias: { a: 'campoA', b: 'campoB', } }

// console.log(parseArgs(['-a', '1', '-b', '2'], options));
// // { _: [], a: 1, campoA: 1, b: 2, campoB: 2 }

// const options = { alias: { a: 'campoA', b: 'campoB', } }

// console.log(parseArgs(process.argv.slice(2)));

// node server --modo dev --puerto 8080 --debug --otros [1,2,3]
// modo: 'dev', puerto: 8080, debug: true, otros: '[1,2,3]' 

// console.log(parseArgs(process.argv.slice(2),options));




// YARGS


const yargs = require('yargs/yargs')(process.argv.slice(2))
// const arg=yargs.argv

// para agregar valores por defecto
// const argsDefecto = yargs
//     .default({
//         nombre: 'pepe',
//         apellido: 'copado'
//     })
// .argv

// console.log(argsDefecto)

// para agregar alias
// const argsAlias = yargs
//     .alias({
//         n: 'nombre',
//         a: 'apellido'
//     })
// .argv

// console.log(argsAlias)

// para valores boolean

// const argsBool = yargs
//     .boolean('vivo')
//     .argv

// console.log(argsBool)
// node server --vivo


