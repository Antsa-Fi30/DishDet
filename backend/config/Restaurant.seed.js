// scripts/seed.js
const Restaurant = require("../models/Restaurant"); // Importez vos modèles
const restaurants = require("../data/restaurant");

const seedDatabase = async () => {
  try {
    await Restaurant.bulkCreate(restaurants);
    console.log("Données de seed ajoutées avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'ajout des seeds :", error);
  }
};

module.exports = seedDatabase;
