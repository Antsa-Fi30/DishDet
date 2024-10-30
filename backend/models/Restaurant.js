const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Restaurant = sequelize.define(
  "restaurants",
  {
    ID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Nom: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    Latitude: {
      type: DataTypes.FLOAT,
    },
    Longitude: {
      type: DataTypes.FLOAT,
    },
    PlacesReservation: {
      type: DataTypes.INTEGER,
    },
    TypeCuisine: {
      type: DataTypes.STRING(255),
    },
  },
  {
    tableName: "restaurants",
    timestamps: false, // Si tu veux pas les colonnes createdAt et updatedAt
  }
);

module.exports = Restaurant;
