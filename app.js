const express = require('express')
const path = require('path')
const app = express()

const homeRouter = require('./routes/homeRouter')

const port = 6969

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.use('/', homeRouter)

app.listen(port, () => {
  console.log(`server is running at localhost: ${port}`)
})
