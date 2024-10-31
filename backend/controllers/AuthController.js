// controllers/authController.js
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Veuillez remplir tous les champs" });
    }

    // Vérifier si l'email est déjà utilisé
    const UserExistant = await User.findOne({ where: { email } });
    if (UserExistant) {
      return res.status(400).json({ message: "Email déjà utilisé" });
    }

    // Hacher le mot de passe avant l'enregistrement
    // var salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);

    // Créer un nouvel User
    const user = await User.create({ name, email, password }); // Assurez-vous que 'password' est la bonne propriété
    console.log("Mot de passe enregistré :", user.password);

    res.status(201).json({ message: "User créé avec succès", user });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    console.log(req.body);

    // Vérifier si l'User existe
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User non trouvé" });
    }
    console.log(password);
    console.log(user.password);

    if (password !== user.password) {
      console.error({ message: "Mot de passe incorrect" });
      return res.status(401).json({ message: "Mot de passe incorrect" });
    }

    // Générer un token JWT
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ message: "Connexion réussie", token });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
};

// controllers/UserController.js
exports.getProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
