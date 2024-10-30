// api.js
import axios from "axios";

const API_URL = "http://localhost:5000"; // URL de votre API (ajustez selon votre configuration)

export const login = async (email, motDePasse) => {
  try {
    const response = await axios.post(`${API_URL}/auth/login`, {
      email,
      motDePasse,
    });
    return response.data; // Renvoie les données de l'API, y compris le token JWT
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Erreur de connexion au serveur");
  }
};

export const register = async (nom, email, motDePasse) => {
  try {
    const response = await axios.post(`${API_URL}/auth/register`, {
      nom,
      email,
      motDePasse,
    });
    return response.data;
  } catch (error) {
    throw error.response
      ? error.response.data
      : new Error("Erreur de connexion au serveur");
  }
};
