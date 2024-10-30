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
    restaurantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "restaurants", // Nom de la table Restaurant
        key: "id",
      },
    },
    itemName: {
      type: DataTypes.STRING(255),
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    categorie: {
      type: DataTypes.STRING(50),
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Menu;
