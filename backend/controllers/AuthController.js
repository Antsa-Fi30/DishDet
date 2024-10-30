// controllers/authController.js
const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { nom, email, motDePasse } = req.body;

    // Vérifier si l'email est déjà utilisé
    const UserExistant = await User.findOne({ where: { email } });
    if (UserExistant) {
      return res.status(400).json({ message: "Email déjà utilisé" });
    }

    // Créer un nouvel User
    const user = await User.create({ nom, email, motDePasse });
    res.status(201).json({ message: "User créé avec succès", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, motDePasse } = req.body;

    // Vérifier si l'User existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User non trouvé" });
    }

    // Vérifier le mot de passe
    const isMatch = await User.validerMotDePasse(motDePasse);
    if (!isMatch) {
      return res.status(400).json({ message: "Mot de passe incorrect" });
    }

    // Générer un token JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.json({ message: "Connexion réussie", token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// controllers/UserController.js
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
