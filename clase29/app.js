const cluster = require('cluster')
const http = require('http')
const numCPUs = require('os').cpus().length

// console.log(numCPUs)
if (cluster.isPrimary) {
    console.log(`Master ${process.pid} is running`)
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork()
    }
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`)
    })
} else {
    http.createServer((req, res) => {
        res.writeHead(200)
        res.end('hello world')
    }).listen(8000)
    
    console.log(`Worker ${process.pid} started`)
}
