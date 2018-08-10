const Game = require('../models/Games')
const mongoose = require('mongoose')

exports.getGame = async (req, res) => {
  try {
    const { id } = req.params;
    const dataGame = await Game.findOne({ _id: mongoose.Types.ObjectId(id) }).populate('Bets');
    return res
          .status(200)
          .json(dataGame)
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
}

exports.modifyStatus = async (req, res) => {
  try {
    const { id, status } = req.query;
    const gameModified = Game.update(id, {
      $set: {
        status: status
      }
    });
    return res.status(200).json({ message: 'Status Updated' });
  } catch(e) {
    return res.status(500);
  }
}

exports.deleteGame = async (req, res) => {
  try {
    const { id } = req.params;
    const dataGame = await Game.remove({ _id: id });
    return res.status(200).json({ message: 'Delete' });
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
}
exports.createGame = async (req, res) => {
  try {
    const { teamOne, teamTwo, gameDate } = req.body;
    const newGame = new Game({
      teamOne: teamOne,
      teamTwo: teamTwo,
      gameDate: gameDate
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
    const { gameId, teamOne, teamTwo, gameDate, createdBy } = req.body;
    const gameToSave = {
      $set: {
        teamOne: teamOne, 
        teamTwo: teamTwo, 
        gameDate: gameDate,
        createdBy: createdBy
      }
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
    const data = await Game.find({}).populate({path: "bets", populate: {path: "user"}}).sort({ gameDate: -1 })
    return res.json(data)
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
}