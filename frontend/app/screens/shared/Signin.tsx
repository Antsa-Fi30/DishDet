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
import { LoginNavigationProp } from "../../constants/NavigationType";
import axios from "axios";

const Signin = () => {
  const [isShow, setIsShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const theme = useTheme();
  const navigation = useNavigation<LoginNavigationProp>();

  const handleSignUp = async () => {
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      console.log(`${name},${email},${password}`);

      const response = await axios.post(
        "http://192.168.43.205:5000/api/register",
        {
          name,
          email,
          password,
        }
      );

      if (response.status === 201) {
        alert("Account created successfully!");
        setName("");
        setEmail("");
        setPassword("");
        navigation.navigate("Login");
      } else {
        console.log(response);
        alert("Signup failed");
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
          <Text style={styles.title}>Create an Account</Text>
          <Text style={styles.texte}>Connect to find resto around you</Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.texte}>Username</Text>
          <View style={styles.inputbar}>
            <TextInput
              placeholder="Who are you?"
              placeholderTextColor={"#ddd"}
              style={{ width: "100%", color: "#fff" }}
              value={name}
              onChangeText={setName}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.texte}>Email Address</Text>
          <View style={styles.inputbar}>
            <TextInput
              placeholder="Enter your address"
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
            onPress={handleSignUp}
          >
            Sign up
          </Button>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <View style={{ flex: 1, height: 1, backgroundColor: "#ddd" }} />
          <Text style={{ fontSize: 14, color: "#fff" }}> Or sign-up with</Text>
          <View style={{ flex: 1, height: 1, backgroundColor: "#ddd" }} />
        </View>

        <View>
          <Button
            style={{ marginTop: 10 }}
            icon="google"
            mode="contained-tonal"
            onPress={() => console.log("Google Sign Up")}
          >
            Sign up
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
          <Text style={styles.texte}>Already have an Account?</Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text
              style={{
                fontSize: 16,
                color: theme.colors.background,
                fontWeight: "bold",
                marginLeft: 6,
              }}
            >
              Login
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Signin;

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
