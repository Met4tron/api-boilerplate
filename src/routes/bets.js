const Bets = require('../controllers/BetsController')
const { Router } = require('express')
const BetsRouter = new Router()

BetsRouter.route('/betId/:id')
  .get(Bets.getBet)
  .delete(Bets.deleteBet)
  .put(Bets.updateBet)

BetsRouter.route('/create')
  .post(Bets.createBet)

module.exports = BetsRouter