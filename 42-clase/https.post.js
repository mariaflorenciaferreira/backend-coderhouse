const https = require('https')

const data = JSON.stringify(
    {
        todo: 'Buy the milk'
    }
)

const options = {
    hostname: 'https://jsonplaceholder.typicode.com/',
    port: 443,
    path: '/posts',
    method: 'GET', 
    headers: {
        'Content-Type': 'application/json',
        'Content-length': data.length
    }
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

req.write(data)
req.end()
