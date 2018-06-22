require('dotenv').config()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

module.exports = api => {
  if (process.env.NODE_ENV === 'development') {
    api.use(morgan('dev'))
  }
  api.use(bodyParser.urlencoded({ extended: true }))
  api.use(bodyParser.json())
  api.use(compression())
  api.use(helmet())
  api.use(cors())
}
