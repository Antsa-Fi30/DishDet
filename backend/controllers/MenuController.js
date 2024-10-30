const Menu = require("../models/Menu");

exports.getMenu = async (req, res) => {
  try {
    const menus = await Menu.findAll();
    res.json(menus);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
};

exports.getOneMenu = async (req, res) => {
  try {
  } catch (error) {}
};

exports.addMenu = async (req, res) => {
  try {
  } catch (error) {}
};

exports.updateMenu = async (req, res) => {
  try {
  } catch (error) {}
};

exports.deleteMenu = async (req, res) => {
  try {
  } catch (error) {}
};
