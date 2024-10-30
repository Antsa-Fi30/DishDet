const Promotion = require("../models/Promotion");

exports.getPromotion = async (req, res) => {
  try {
    const promotions = await Promotion.findAll();
    res.json(promotions);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
};

exports.getOnePromotion = async (req, res) => {
  try {
  } catch (error) {}
};

exports.addPromotion = async (req, res) => {
  try {
  } catch (error) {}
};

exports.updatePromotion = async (req, res) => {
  try {
  } catch (error) {}
};

exports.deletePromotion = async (req, res) => {
  try {
  } catch (error) {}
};
