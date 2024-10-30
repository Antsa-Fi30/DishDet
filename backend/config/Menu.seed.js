// scripts/seed.js
const Menu = require("../models/Menu"); // Importez vos modèles
const menus = require("../data/menus");

const MenuSeedDatabase = async () => {
  try {
    await Menu.bulkCreate(menus);
    console.log("Données de seed ajoutées avec succès !");
  } catch (error) {
    console.error("Erreur lors de l'ajout des seeds :", error);
  }
};

module.exports = MenuSeedDatabase;
