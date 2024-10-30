// models/Review.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Review = sequelize.define(
  "reviews",
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
    Userid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "users",
        key: "id",
      },
    },
    Rating: {
      type: DataTypes.INTEGER,
    },
    Comments: {
      type: DataTypes.TEXT,
    },
    ReviewDate: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Review;
