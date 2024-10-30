// models/Utilisateur.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Utilisateur = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Name: {
      type: DataTypes.STRING(255),
    },
    Email: {
      type: DataTypes.STRING(255),
      unique: true,
    },
    Password: {
      type: DataTypes.STRING(255),
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Utilisateur;
