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
  status: {
    type: String,
    enum: ['LIVE', 'FINISHED', 'PENDING'],
    default: 'PENDING'
  },
  assets: {
    teamOne: {
      url: String
    },
    teamTwo: {
      url: String
    }
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  gameDate: {
    type: Date
  },
  bets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Bets'
  }]
})

module.exports = mongoose.model('Games', Games)