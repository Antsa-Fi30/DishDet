import { Pressable, StyleSheet, TouchableOpacity, View } from "react-native";
import { useState } from "react";

// Icons
import Octicons from "@expo/vector-icons/Octicons";

// React Native Paper
import { TextInput, Text } from "react-native-paper";

const SearchSource = ({ navigation }) => {
  const [text, setText] = useState("");

  return (
    <TouchableOpacity
      style={styles.searchbar}
      onPress={() => navigation.navigate("Search")}
    >
      <Octicons name="search" size={24} color="red" style={styles.icon} />
      <View style={styles.inputbar}>
        <Text style={{ fontFamily: "Montserrat-Regular" }}>View source</Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchSource;

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
