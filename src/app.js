import express from 'express'
import config from './config/config'
import middlewares from './config/middlewares'
import Routes from './routes'
require('./config/db')

const api = express()
middlewares(api)
api.use('/api', Routes)

api.listen(config.PORT, (err) => {
  if (err) {
    console.log(err)
  }
  console.log('Server Running!!')
})
