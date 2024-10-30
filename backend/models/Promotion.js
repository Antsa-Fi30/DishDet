// models/Promotion.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Promotion = sequelize.define(
  "promotions",
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
        model: "restaurants",
        key: "id",
      },
    },
    Description: {
      type: DataTypes.TEXT,
    },
    DateStart: {
      type: DataTypes.DATE,
    },
    DateEnd: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Promotion;
