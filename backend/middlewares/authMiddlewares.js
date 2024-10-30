// middleware/authMiddleware.js
const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1]; // Format attendu : "Bearer <token>"

  if (!token) {
    return res
      .status(401)
      .json({ message: "Accès refusé, aucun token fourni" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.utilisateur = decoded; // Attacher les infos de l'utilisateur à la requête
    next();
  } catch (error) {
    res.status(400).json({ message: "Token invalide" });
  }
};

module.exports = authMiddleware;
