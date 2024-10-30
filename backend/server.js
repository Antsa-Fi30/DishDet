/* eslint-disable no-undef */
const express = require("express");

//Middlewares packages
const bodyParser = require("body-parser");
const cors = require("cors");

//ORM Sequelize configurations
const sequelize = require("./config/database");

//Seeds
// const seedDatabase = require("./config/Restaurant.seed");
// const PromoSeedDatabase = require("./config/Promotion.seed");
// const MenuSeedDatabase = require("./config/Menu.seed");

//Routes
const RestosRoute = require("./routes/RestosRoute");
const PromoRoute = require("./routes/PromoRoute");
const MenuRoute = require("./routes/MenuRoute");
const ReviewRoute = require("./routes/ReviewRoute");
const UserRoute = require("./routes/UserRoute");
const BookingRoute = require("./routes/BookingRoute");

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
sequelize.sync().then(async () => {
  console.log("Base de donnée synchronisée");
  // await seedDatabase();
  // await PromoSeedDatabase();
  // await MenuSeedDatabase();
});

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//API routes
app.use("/api", RestosRoute);
app.use("/api", PromoRoute);
app.use("/api", MenuRoute);
app.use("/api", ReviewRoute);
app.use("/api", UserRoute);
app.use("/api", BookingRoute);

app.listen(port, () => {
  console.log(`Serveur backend démarré sur le port ${port}`);
});
