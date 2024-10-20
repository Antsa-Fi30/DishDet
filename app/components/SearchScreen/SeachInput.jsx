import { StyleSheet, View } from "react-native";
import { useState } from "react";

// Icons
import Octicons from "@expo/vector-icons/Octicons";

// React Native Paper
import { TextInput, Chip, Text } from "react-native-paper";

const SearchInput = () => {
  const [text, setText] = useState("");

  return (
    <>
      <View style={styles.searchbar}>
        <Octicons name="search" size={24} color="red" style={styles.icon} />
        <TextInput
          style={styles.inputbar}
          placeholder={"Search for food source"}
          placeholderTextColor="#ddd"
          value={text}
          onChangeText={(text) => setText(text)}
          mode="flat"
          underlineColor="transparent"
          activeUnderlineColor="transparent"
        />
        <Octicons name="filter" size={24} color="red" />
      </View>
      <View style={styles.chipContainer}>
        <Chip
          icon="map-marker"
          style={styles.chip}
          onPress={() => console.log("Nearest pressed")}
        >
          <Text style={styles.label}>Nearest</Text>
        </Chip>
        <Chip
          icon="clock"
          style={styles.chip}
          onPress={() => console.log("Opened pressed")}
        >
          <Text style={styles.label}>Opened</Text>
        </Chip>
        <Chip
          icon="shield"
          style={styles.chip}
          onPress={() => console.log("Safest pressed")}
        >
          <Text style={styles.label}>Safest</Text>
        </Chip>
      </View>
    </>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  icon: {
    marginRight: 10,
  },
  inputbar: {
    flex: 1,
    backgroundColor: "transparent",
    fontFamily: "Montserrat-Regular",
  },
  chipContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 20,
    marginTop: 10,
  },
  chip: {
    backgroundColor: "#f5f5f5",
  },
  label: {
    fontFamily: "Montserrat-Medium",
  },
});
