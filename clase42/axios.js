const axios = require('axios')

const url = 'https://pokeapi.co/api/v2/ability/?limit=20&offset=20'
// const url = '/user?ID=12345'
// const url = '/user'

// id por Url
// axios.get(url) 
//     .then(res => {
//         console.log(res)
//     })
//     .catch(err => console.log(err))
    // .then() Siempre sera ejecutado 

// id por params

axios.get('/user', {
        params: {
            ID: 12345     
        }
    }) 
    .then(res => {
        console.log(res)
    })
    .catch(err => console.log(err))
    // .then() Siempre sera ejecutado 


// _________________________   post ______________________________

const options= {
    firstName: 'Fred',
    lastName: 'Flintstone'
}

axios.post('/user', options)
.then(function (response) {
    console.log(response);
})
.catch(function (error) {
    console.log(error);
})


// _______________________________________________________________


// // Ejecutando múltiples peticiones concurrentes

// function getUserAccount() {
//     return axios.get('/user/12345');
// }

// function getUserPermissions() {
//     return axios.get('/user/12345/permissions');
// }

// Promise.all([getUserAccount(), getUserPermissions()])
//     .then(function (results) {
//     const acct = results[0];
//     const perm = results[1];
//     })

// // ________________________________________________________________

//     // Enviar una petición POST
// axios( {
//             method: 'post',
//             url: '/user/12345',
//             data: {
//                 firstName: 'Fred',
//                 lastName: 'Flintstone'
//             }
//     });


//     // Petición GET para una imagen remota en node.js
//     axios({
//         method: 'get',
//         url: 'http://bit.ly/2mTM3nY',
//         responseType: 'stream'
//     })
//     .then(function (response) {
//         response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
//     });

