import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Button, Text, useTheme } from "react-native-paper";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Pour stocker le token
import { HomeNavigationProp } from "../../constants/NavigationType";

const Login = () => {
  const [isShow, setIsShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = useTheme();
  const navigation = useNavigation<HomeNavigationProp>();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      console.log(`${email},${password}`);

      const response = await axios.post(
        "http://192.168.43.205:5000/api/login", // endpoint de login
        {
          email,
          password,
        }
      );

      if (response.status === 200) {
        const token = response.data.token;

        // Stocker le token dans AsyncStorage
        await AsyncStorage.setItem("userToken", token);

        alert("Login successful!");
        setEmail("");
        setPassword("");
        navigation.navigate("Home"); // Rediriger vers la page principale après connexion
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error(error.message);
      alert("An error occurred " + error.message);
    }
  };

  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[theme.colors.tertiary, theme.colors.secondary]}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>Log in</Text>
          <Text style={styles.texte}>Connect to find resto around you</Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.texte}>Email Address</Text>
          <View style={styles.inputbar}>
            <TextInput
              placeholder="Enter your email"
              keyboardType="email-address"
              placeholderTextColor={"#ddd"}
              style={{ width: "100%", color: "#fff" }}
              value={email}
              onChangeText={setEmail}
            />
          </View>
        </View>

        <KeyboardAvoidingView style={{ marginBottom: 10 }}>
          <Text style={styles.texte}>Password</Text>
          <View style={styles.inputbar}>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={"#ddd"}
              style={{ width: "100%", color: "#fff" }}
              secureTextEntry={!isShow}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              onPress={() => setIsShow(!isShow)}
              style={{ position: "absolute", right: 12 }}
            >
              {isShow ? (
                <Entypo name="eye" size={26} color="#fff" />
              ) : (
                <Entypo name="eye-with-line" size={26} color="#fff" />
              )}
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>

        <View>
          <Button
            style={{ marginTop: 18 }}
            icon="login-variant"
            mode="contained-tonal"
            onPress={handleLogin}
          >
            Log in
          </Button>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 22,
          }}
        >
          <Text style={styles.texte}>Don't have an account?</Text>
          <Pressable onPress={() => navigation.navigate("Signin")}>
            <Text
              style={{
                fontSize: 16,
                color: theme.colors.background,
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Sign up
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { marginHorizontal: 22 },
  subContainer: { marginVertical: 5 },
  title: { fontWeight: "bold", marginVertical: 7, fontSize: 22, color: "#fff" },
  texte: { fontWeight: "bold", marginVertical: 5, fontSize: 15, color: "#fff" },
  inputbar: {
    width: "100%",
    height: 48,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
  },
});
