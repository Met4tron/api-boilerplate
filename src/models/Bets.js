import mongoose from 'mongoose'

const Bets = new mongoose.Schema({
  teamOne: {
    type: Number,
    required: true
  },
  teamTwo: {
    type: Number,
    required: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Bets', Bets)