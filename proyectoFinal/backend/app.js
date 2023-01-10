import express from 'express'
import app from './index.js'

app.use(express.static('public'))

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Running on port ${PORT}`))