import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native-paper";
import Octicons from "@expo/vector-icons/Octicons";

const SettingsHead = ({ title }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.headTitle}>
      <TouchableOpacity
        style={styles.buttonback}
        onPress={() => navigation.goBack()}
      >
        <Octicons name="arrow-left" size={30} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default SettingsHead;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 10,
  },
  subContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
  },
  headTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonback: {
    position: "absolute",
    left: 2,
    color: "red",
  },
});
