// authContext.js (ou un fichier de contexte d’authentification)
import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { login, register } from "../api/api";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fonction de connexion
  const signIn = async (email, motDePasse) => {
    try {
      const data = await login(email, motDePasse);
      setUserToken(data.token);
      await AsyncStorage.setItem("userToken", data.token); // Enregistrer le token
    } catch (error) {
      console.error("Erreur de connexion :", error.message);
    }
  };

  // Fonction de déconnexion
  const signOut = async () => {
    setUserToken(null);
    await AsyncStorage.removeItem("userToken"); // Supprimer le token
  };

  // Récupérer le token à partir d’AsyncStorage au démarrage
  const loadUserToken = async () => {
    const token = await AsyncStorage.getItem("userToken");
    setUserToken(token);
    setLoading(false);
  };

  useEffect(() => {
    loadUserToken();
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, userToken, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
