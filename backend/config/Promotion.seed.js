// scripts/seed.js
const Promotion = require("../models/Promotion"); // Importez vos modèles
const promotions = require("../data/promotions");

const PromoSeedDatabase = async () => {
  try {
    await Promotion.bulkCreate(promotions);
    console.log("Données de seed ajoutées avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'ajout des seeds :", error);
  }
};

module.exports = PromoSeedDatabase;
