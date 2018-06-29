const Game = require('../models/Games')
const mongoose = require('mongoose')

exports.getGame = async (req, res) => {
  try {
    const { gameId } = req.body.game;
    const dataGame = await Game.findOne({ _id: mongoose.Types.ObjectId(gameId) });
    return res
          .status(200)
          .json(dataGame)
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
}
exports.deleteGame = async (req, res) => {
  try {
    const { gameId } = req.body.gameId;
    const dataGame = await Game.remove({ _id: gameId });
    return res.status(200).json({ message: 'Delete' });
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
}
exports.createGame = async (req, res) => {
  try {
    console.log(req.body);
    const { teamOne, teamTwo } = req.body;
    const newGame = new Game({
      teamOne: teamOne,
      teamTwo: teamTwo,
    });
    await newGame.save();
    return res.status(200).json({ message: 'Created' });
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
}
exports.updateGame = async (req, res) => {
  try {
    const { gameId, teamOne, teamTwo } = req.body.game;
    const gameToSave = {
      $set: req.body.game
    }
    const dataGame = await Game.findByIdAndUpdate({ _id: mongoose.Types.ObjectId(gameId) }, gameToSave);
    return res.status(200).json(dataGame);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
}
exports.getAllGames = async (req, res) => {
  try {
    const data = await Game.find({});
    return res.json(data)
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
}