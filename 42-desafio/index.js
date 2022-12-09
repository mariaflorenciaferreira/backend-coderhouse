import express from 'express'
import indexRoute from './src/routes/index.routes.js'
import 'dotenv/config'
import cors from 'cors'

const app = express()

var allowList = ['http://127.0.0.1:5173', 'http://localhost:5173']

const corsOptions= (req, callback) => {
    let corsOptions

    let isDomainAllowed = allowList.indexOf(req.header('Origin')) !== -1
    
    let isExtensionAllowed = req.path.endsWith('.jpg')
    
    console.log(isExtensionAllowed)

    if (isDomainAllowed) {
        corsOptions = { origin: true }
    }else {
        corsOptions = { origin: false }
    }
    callback(null, corsOptions)
}



app.use(express.static('public'))
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(indexRoute)

export default app;