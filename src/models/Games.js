import mongoose from 'mongoose'

const Games = new mongoose.Schema({
  teamOne: {
    type: String,
    required: true
  },
  teamTwo: {
    type: String,
    required: true
  },
  bets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bets'
  }]
})

module.exports = mongoose.model('Games', Games)