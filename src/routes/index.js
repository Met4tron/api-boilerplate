const UserRoutes = require('./user')
const BetsRoutes = require('./bets')
const GameRoutes = require('./games')
const router = require('express').Router()

router.use('/user', UserRoutes)
router.use('/bets', BetsRoutes)
router.use('/games', GameRoutes)

module.exports = router