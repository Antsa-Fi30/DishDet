const User = require("../models/User");

exports.getUser = async (req, res) => {
  try {
    const User = await User.findAll();
    res.json(User);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
};

exports.getOneUser = async (req, res) => {
  try {
  } catch (error) {}
};

exports.addUser = async (req, res) => {
  try {
  } catch (error) {}
};

exports.updateUser = async (req, res) => {
  try {
  } catch (error) {}
};

exports.deleteUser = async (req, res) => {
  try {
  } catch (error) {}
};
