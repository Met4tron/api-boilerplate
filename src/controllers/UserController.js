const User = require('../models/User')

exports.getUser = async (req, res) => {
  try {
    const { userId } = req.query;
    const userFinded = User.findOne({ "_id": userId });
    return res.status(200).json(userFinded);
  } catch (err) {
    res.status(500);
  }
}

exports.updateUser = async (req, res) => {
  try {
    const { user } = req.body;
    // const new 
  } catch (err) {
    res.status(500);
  }
}

exports.deleteUser = async (req, res) => {
  try {
    const { userId } = req.body;
    const deletedUser = User.remove({ _id: userId });
  } catch (err) {
    res.status(500);
  }
}

exports.createUser = async (req, res) => {
  try {

  } catch (err) {
    res.status(500);
  }
}