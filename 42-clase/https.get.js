const https = require('https')

const options = {
    // hostname: 'www.pokeapi.co/api/v2/ability/?limit=20&offset=20',
    hostname: 'pokeapi.co',
    // port: 4000,
    path: '/api/v2/ability/?limit=20&offset=20',
    method: 'GET'
}

const req = https.request(options, res => {
    console.log(`statusCode: ${res.statusCode}`)
    
    res.on('data', d => {
        process.stdout.write(d)
    })
})


req.on('error', error => { 
    console.log(error)
})

req.end()
