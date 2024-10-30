const Restaurant = require("../models/Restaurant");

exports.getRestos = async (req, res) => {
  try {
    const restos = await Restaurant.findAll();
    res.json(restos);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
};

exports.getOneResto = async (req, res) => {
  try {
  } catch (error) {}
};

exports.addRestos = async (req, res) => {
  try {
  } catch (error) {}
};

exports.updateRestos = async (req, res) => {
  try {
  } catch (error) {}
};

exports.deleteRestos = async (req, res) => {
  try {
  } catch (error) {}
};
