const { Router } = require('express')
const User = require('../controllers/UserController')

const router = new Router()

router.route('/:id')
  .get(User.getUser)
  .put(User.updateUser)

module.exports = router