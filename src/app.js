require('dotenv').config()
const express = require('express')
const config = require('./config/config')
const middlewares = require('./config/middlewares')
const routes = require('./routes')
require('./config/db')

const api = express()
middlewares(api)
api.use('/api', routes)

api.listen(9001, (err) => {
  if (err) {
    console.log(err)
  }
  console.log(`Server Running on port ${config.port}!!`)
})
