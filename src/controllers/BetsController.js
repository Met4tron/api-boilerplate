const Bets = require('../models/Bets')
const Game = require('../models/Games')
const mongoose = require('mongoose');

exports.getBet = async (req, res) => {
  try {
    const { betsId } = req.body.bets;
    const dataBets = await Bets.findById({ _id: mongoose.Types.ObjectId(betsId) });
    return res.status(200).json(dataBets);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
}

exports.deleteBet = async (req, res) => {
  try {
    const { betsId } = req.body.bets;
    const dataBets = await Bets.remove({ _id: mongoose.Types.ObjectId(betsId) });
    return res.status(200).json(dataBets);
  } catch (err) {
    return res.status(500);
  }
}

exports.updateBet = async (req, res) => {
  try {
    const { betsId } = req.body.bets;
    const betToUpdate = {
      $set: req.body.bets
    }
    const dataBets = await Bets.findByIdAndUpdate({ _id: mongoose.Types.ObjectId(betsId) }, betToUpdate);
    return res.status(200).json(dataBets);
  } catch (err) {
    return res.status(500);
  }
}

exports.createBet = async (req, res) => {
  try {
    const { gameId } = req.body;
    const newBet = new Bets(req.body);
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