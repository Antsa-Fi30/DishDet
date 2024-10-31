import React, { useContext, useEffect, useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Avatar, useTheme } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";
import { AuthContext } from "../../context/authContext";
import { useNavigation } from "@react-navigation/native";
import { LoginNavigationProp } from "../../constants/NavigationType";
import axios from "axios";

const HeaderProfil = () => {
  const theme = useTheme();
  const { signOut, token } = useContext(AuthContext); // Accéder au token JWT
  const navigation = useNavigation<LoginNavigationProp>();
  const [user, setUser] = useState({ name: "" }); // État pour stocker les données utilisateur

  useEffect(() => {
    // Fonction pour récupérer les infos du profil
    const fetchProfile = async () => {
      try {
        const response = await axios.get("http://192.168.43.205:5000/api/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data);
      } catch (error) {
        console.error("Erreur de récupération du profil :", error);
      }
    };

    fetchProfile();
  }, [token]);

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: theme.colors.elevation.level1 },
      ]}
    >
      <Pressable
        style={styles.button1}
        onPress={() => {
          signOut();
          navigation.navigate("Login");
        }}
      >
        <AntDesign
          name="logout"
          size={24}
          color={theme.dark ? "white" : "black"}
        />
      </Pressable>
      <View style={styles.subContainer}>
        <Avatar.Image size={70} source={require("../../../assets/1.jpg")} />
        <Text style={styles.title}>{user.name || "Test"}</Text>
        <Text style={styles.localisation}>Localisation non disponible</Text>
      </View>
    </SafeAreaView>
  );
};

export default HeaderProfil;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    borderBottomStartRadius: 35,
    borderBottomEndRadius: 35,
    marginBottom: 10,
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    gap: 6,
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    marginTop: 5,
  },
  localisation: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
  button1: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    top: 60,
    left: 25,
  },
});
