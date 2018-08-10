const Bets = require('../models/Bets')
const Game = require('../models/Games')
const mongoose = require('mongoose');

exports.getBet = async (req, res) => {
  try {
    const { id } = req.params;
    const dataBets = await Bets.findById({ _id: mongoose.Types.ObjectId(id) });
    return res.status(200).json(dataBets);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
}

exports.getAllBetsByGame = async (req, res) => {
  try {
    const allBets = await Bets.find({});
    return res.status(200).json(allBets)
  } catch (e) {
    return res.status(500);
  }
}

exports.deleteBet = async (req, res) => {
  try {
    const { betsId } = req.body.bets;
    const dataBets = await Bets.update({ _id: mongoose.Types.ObjectId(betsId) });
    return res.status(200).json(dataBets);
  } catch (err) {
    return res.status(500);
  }
}

exports.updateBet = async (req, res) => {
  try {
    const { betId, teamOne, teamTwo } = req.body;
    const user = req.user
    const betToUpdate = {
      $set: {
        teamOne: teamOne,
        teamTwo: teamTwo
      }
    }
    const dataBets = await Bets.findByIdAndUpdate({ _id: mongoose.Types.ObjectId(betId), user: mongoose.Types.ObjectId(user._id) }, betToUpdate);
    return res.status(200).json(dataBets);
  } catch (err) {
    return res.status(500);
  }
}

exports.createBet = async (req, res) => {
  try {
    const { teamOne, teamTwo, gameId } = req.body;
    const newBet = new Bets({ teamOne: teamOne, teamTwo: teamTwo, game: gameId });
    const game = await Game.findOne({ _id: mongoose.Types.ObjectId(gameId) });
    const betSaved = await newBet.save();
    game.bets.push(betSaved);
    await game.save();
    return res.status(200).json({ message: 'Bet Created' });
  } catch (err) {
    console.log(err);
    return res.status(500); 
  }
}