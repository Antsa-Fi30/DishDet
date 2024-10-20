import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Octicons from "@expo/vector-icons/Octicons";

const SettingsButton = ({ icon, label, onPress, isLogout }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isLogout && styles.logoutButton]}
      onPress={onPress}
    >
      <View style={styles.iconContainer}>
        <Octicons name={icon} size={20} color={isLogout ? "orange" : "red"} />
      </View>
      <Text style={[styles.buttonText, isLogout && styles.logoutText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const ProfilContent = () => {
  return (
    <View style={styles.container}>
      <SettingsButton icon="person" label="Edit Profile" onPress={() => {}} />
      <SettingsButton icon="location" label="Location" onPress={() => {}} />
      <SettingsButton icon="globe" label="Language" onPress={() => {}} />
      <SettingsButton icon="bell" label="Notification" onPress={() => {}} />
      <SettingsButton icon="comment" label="Feedback" onPress={() => {}} />
    </View>
  );
};

export default ProfilContent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
    marginVertical: 10,
    borderRadius: 25,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  logoutButton: {
    borderColor: "orange",
  },
  iconContainer: {
    marginRight: 15,
  },
  buttonText: {
    color: "#121212",
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    fontWeight: "500",
  },
  logoutText: {
    color: "orange",
  },
});
