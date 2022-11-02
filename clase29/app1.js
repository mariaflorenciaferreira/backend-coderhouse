const express = require('express')

const PORT = process.argv[2] || 8080
const PID = process.pid

const app = express()

app.get('/', (req, res) => {
    res.send(`Servidor express en puerto: ${PORT} - PID WORKER: ${PID} - Fecha: ${new Date().toLocaleString()}`)
})

const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
