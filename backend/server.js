/* eslint-disable no-undef */
const express = require("express");

//Middlewares packages
const bodyParser = require("body-parser");
const cors = require("cors");

//ORM Sequelize configurations
const sequelize = require("./config/database");

//Routes

const app = express();
const port = 5000;

//Connexion à la base de donnée sqlite
sequelize
  .authenticate()
  .then(() => {
    console.log("Connexion reussite");
  })
  .catch((err) => {
    console.log("Echec de connexion : " + err);
  });

//Synchronisation de la base de donnée
sequelize.sync().then(() => {
  console.log("Base de donnée synchronisée");
});

//Middlewares
app.use(cors());
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Serveur backend démarré sur le port ${port}`);
});
