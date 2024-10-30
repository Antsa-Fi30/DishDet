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
    const { id } = req.params;
    const promotion = await Promotion.findOne({ where: { id } });
    res.json(promotion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.addPromotion = async (req, res) => {
  try {
    const { restaurantID, description, dateDebut, dateFin } = req.body;

    const newPromotion = await Promotion.create({
      restaurantID,
      description,
      dateDebut,
      dateFin,
    });

    res.status(201).json(newPromotion);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.deletePromotion = async (req, res) => {
  try {
    const { id } = req.params;
    await Promotion.destroy({ where: { id } });

    res.status(200);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
