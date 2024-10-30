const { Sequelize } = require("sequelize");
const sequelize = require("../config/database");

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
