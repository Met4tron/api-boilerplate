import mongoose from 'mongoose'

const User = new mongoose.Schema({
  nickname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  wins: {
    type: Number
  }
})

module.exports = mongoose.model('User', User)