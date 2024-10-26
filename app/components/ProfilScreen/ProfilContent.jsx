import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Octicons from "@expo/vector-icons/Octicons";
import { Text, useTheme } from "react-native-paper";

const SettingsButton = ({ icon, label, onPress }) => {
  const theme = useTheme();

  return (
    <TouchableOpacity style={[styles.button]} onPress={onPress}>
      <Octicons
        style={{ color: theme.colors.primary }}
        name={icon}
        size={24}
        color="black"
      />
      <Text style={[styles.buttonText]}>{label}</Text>
    </TouchableOpacity>
  );
};

const ProfilContent = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme.colors.elevation.level1 },
      ]}
    >
      <SettingsButton
        icon="person"
        label="Edit Profile"
        onPress={() => navigation.navigate("Edit")}
      />
      <SettingsButton
        icon="location"
        label="Location"
        onPress={() => navigation.navigate("Location")}
      />
      <SettingsButton
        icon="globe"
        label="Language"
        onPress={() => navigation.navigate("Language")}
      />
      <SettingsButton
        icon="bell"
        label="Notification"
        onPress={() => navigation.navigate("Notification")}
      />
      <SettingsButton
        icon="comment"
        label="Feedback"
        onPress={() => navigation.navigate("Feedback")}
      />
    </View>
  );
};

export default ProfilContent;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    marginVertical: 10,
    borderRadius: 25,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    gap: 10,
  },
  logoutButton: {
    borderColor: "orange",
  },
  iconContainer: {
    marginRight: 15,
  },
  buttonText: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
  logoutText: {
    color: "orange",
  },
});
