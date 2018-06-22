const Game = require('../models/Games')

exports.getGame = async (req, res) => {}
exports.deleteGame = async (req, res) => {}
exports.createGame = async (req, res) => {}
exports.updateGame = async (req, res) => {}
exports.getAllGames = async (req, res) => {
  try {
    console.log(`Alou`)
    const data = await Game.find({})
    return res.json(data)
  } catch (err) {
    console.log(err)
  }
}