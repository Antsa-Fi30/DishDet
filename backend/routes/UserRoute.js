// routes/utilisateur.js
const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddlewares");
const AuthController = require("../controllers/AuthController");
const UserController = require("../controllers/UserController");

router.get("/me", authMiddleware, AuthController.getProfile);
router.get("/users", AuthController.getUsers);
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
router.delete("/deleteuser/:id", UserController.deleteUser);

module.exports = router;
