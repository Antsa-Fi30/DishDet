// models/Booking.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Booking = sequelize.define(
  "bookings",
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
    DateBooking: {
      type: DataTypes.DATE,
    },
    ReservedPlaces: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Booking;
