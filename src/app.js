const fs = require('fs')
const express = require('express')
const path = require('path')
const config = require('./config/config')
const middlewares = require('./config/middlewares')
const Routes = require('./routes')
require('./config/db')

const api = express()
middlewares(api)
api.use('/api', Routes)

api.listen(config.PORT, (err) => {
  if (err) {
    console.log(err) 
  }
})