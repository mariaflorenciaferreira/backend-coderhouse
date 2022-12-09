const express = require('express')

const app = express()

const port=parseInt(process.argv[2]) || 8080

app.get('/datos', (req, res) => {
    console.log(`Puerto ${port} fyh: ${new Date()}`)
    res.send(`Puerto ${port} - PID: ${process.pid} fyh: ${new Date().toDateString()}`)
})


app.listen(port, function(){
    console.log(`Listening on port ${8080}`)
})
