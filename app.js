const express = require('express')
const app = express()
const path = require('path')

const router = require('./routes/router')

const port = 6969

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use('/', router)

app.listen(port, () => {
  console.log(`server is running at localhost: ${port}`)
})
