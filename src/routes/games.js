const Game = require('../controllers/GameController')
const { Router } = require('express')
const GameRoutes = new Router()

GameRoutes.route('/:id')
  .get(Game.getGame)
  .delete(Game.deleteGame)
  .post(Game.createGame)
  .put(Game.updateGame)

GameRoutes.route('/all')
  .get(Game.getAllGames)
  
module.exports = GameRoutes