const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const performerRoutes = require('./routes/performerRoutes')

const app = express()
const port = 3001

mongoose.connect('mongodb://localhost/performers')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/performers', performerRoutes)

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
