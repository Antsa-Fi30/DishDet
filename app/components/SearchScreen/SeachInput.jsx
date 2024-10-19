import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SeachInput = () => {
  return (
    <View>
      <Text>SeachInput</Text>
    </View>
  );
};

export default SeachInput;

const styles = StyleSheet.create({
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff", // Dark background color
    borderRadius: 15,
    paddingHorizontal: 16,
    marginHorizontal: 18,
    marginVertical: 20,
    borderWidth: 2, // Épaisseur de la bordure
    borderColor: "#ddd", // Couleur de la bordure
    gap: 10,
  },
  icon: {
    marginRight: 10,
  },
  inputbar: {
    flex: 1,
    backgroundColor: "transparent",
    paddingVertical: 14,
  },
});
