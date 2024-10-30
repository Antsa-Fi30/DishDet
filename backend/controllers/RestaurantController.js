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
    const { id } = req.params;
    const restaurant = await Restaurant.findOne({ where: { id } });
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant non trouvé" });
    }
    res.json(restaurant);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
};

exports.addRestos = async (req, res) => {
  try {
    const { name, latitude, longitude, reservations, cuisineType } = req.body;

    const newRestaurant = await Restaurant.create({
      name,
      latitude,
      longitude,
      reservations,
      cuisineType,
    });

    res.status(201).json(newRestaurant);
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
};

exports.updateRestos = async (req, res) => {
  try {
    const { name, latitude, longitude, reservations, cuisineType } = req.body;

    const updated = await Restaurant.update(
      {
        name,
        latitude,
        longitude,
        reservations,
        cuisineType,
      },
      { where: { id } }
    );

    if (updated[0] === 0) {
      return res.status(404).json({ message: "Restaurant non trouvé" });
    }

    res.status(200).json({ message: "Restaurant mis à jour avec succès" });
  } catch (error) {}
};

exports.deleteRestos = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Restaurant.destroy({ where: { id } });

    if (deleted === 0) {
      return res.status(404).json({ message: "Restaurant non trouvé" });
    }

    res.status(200).json({ message: "Restaurant supprimé avec succès" });
  } catch (error) {
    console.error(error.message);
    res.status(400).json({ message: error.message });
  }
};
