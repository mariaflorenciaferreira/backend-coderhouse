import express from 'express'
import indexRoute from './src/routes/index.routes.js'
import 'dotenv/config'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(indexRoute)

export default app;