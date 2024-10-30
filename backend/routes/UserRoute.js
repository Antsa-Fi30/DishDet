// routes/utilisateur.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddlewares");
const AuthController = require("../controllers/AuthController");

router.get("/me", authMiddleware, AuthController.getProfile);
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

module.exports = router;
