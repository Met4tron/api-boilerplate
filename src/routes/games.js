const Game = require('../controllers/GameController')
const { Router } = require('express')
const GameRoutes = new Router()

GameRoutes.route('/game/:id')
  .get(Game.getGame)
  .delete(Game.deleteGame)
  .put(Game.updateGame)

GameRoutes.route('/create')
  .post(Game.createGame)

GameRoutes.route('/all')
  .get(Game.getAllGames)
  
module.exports = GameRoutes