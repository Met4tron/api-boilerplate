require('dotenv').config()

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  db: {
    host: process.env.MONGO_HOST,
    port: process.env.MONGO_PORT,
    pw: process.env.MONGO_PASSWORD
  }
}