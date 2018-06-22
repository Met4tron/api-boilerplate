const Bets = require('../controllers/BetsController')
const { Router } = require('express')
const BetsRouter = new Router()

BetsRouter.route('/:id')
  .get(Bets.getStats)
  .delete(Bets.deleteBet)
  .put(Bets.updateBet)

BetsRouter.route('/:id/stats')
  .get(Bets.getStats)

BetsRouter.route('/create')
  .post(Bets.createBet)

module.exports = BetsRouter