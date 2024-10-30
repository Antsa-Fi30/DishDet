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
    const { id } = req.params;
    const menu = await Menu.findOne({ where: { id } });
    res.json(menu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.addMenu = async (req, res) => {
  try {
    const { restaurantId, itemName, description, price, categorie } = req.body;
    p;
    const newMenu = await Menu.create({
      restaurantId,
      itemName,
      description,
      price,
      categorie,
    });

    res.status(201).json(newMenu);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateMenu = async (req, res) => {
  try {
  } catch (error) {}
};

exports.deleteMenu = async (req, res) => {
  try {
  } catch (error) {}
};
