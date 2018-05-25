const { Router } = require('express')
const User = require('./user')

const routes = new Router();

routes.use('/user', User)

module.exports = routes