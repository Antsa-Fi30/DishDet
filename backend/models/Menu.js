const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Menu = sequelize.define(
  "menus",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Restaurantid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "restaurants", // Nom de la table Restaurant
        key: "id",
      },
    },
    NomPlat: {
      type: DataTypes.STRING(255),
    },
    Description: {
      type: DataTypes.TEXT,
    },
    Price: {
      type: DataTypes.FLOAT,
    },
    Categorie: {
      type: DataTypes.STRING(50),
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Menu;
