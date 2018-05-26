import User from './user'
import { Router } from 'express'

const routes = new Router()

routes.use('/user', User)

module.exports = routes