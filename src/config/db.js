const config = require('./config')
const mongoose = require('mongoose')
const chalk = require('chalk')
const { log } = require('console')

mongoose.Promise = global.Promise

try {
  mongoose.connect(config.db.host)
} catch(err) {
  console.log(err)
}

mongoose.connection
  .on('open', () => log(chalk.green.bold('Mongo Running!')))

