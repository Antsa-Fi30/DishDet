import { StyleSheet, TouchableOpacity, View } from "react-native";
import { useState } from "react";

// Icons
import Octicons from "@expo/vector-icons/Octicons";

// React Native Paper
import { TextInput, Chip, Text, useTheme } from "react-native-paper";

const SearchInput = () => {
  const [text, setText] = useState("");
  const [selectedFilters, setSelectedFilters] = useState({
    cuisine: false,
    distance: false,
    openNow: false,
    price: false,
  });

  const theme = useTheme();

  const toggleFilter = (filter) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  return (
    <View>
      <View
        style={[styles.searchbar, { backgroundColor: theme.colors.background }]}
      >
        <TouchableOpacity>
          <Octicons name="search" size={24} color="red" style={styles.icon} />
        </TouchableOpacity>
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
        <TouchableOpacity>
          <Octicons name="filter" size={24} color="red" />
        </TouchableOpacity>
      </View>
      <View style={styles.chipContainer}>
        <Chip
          selected={selectedFilters.cuisine}
          onPress={() => toggleFilter("cuisine")}
          style={styles.chip}
        >
          <Text style={styles.labelChip}>Type de cuisine</Text>
        </Chip>
        <Chip
          selected={selectedFilters.distance}
          onPress={() => toggleFilter("distance")}
          style={styles.chip}
        >
          <Text style={styles.labelChip}>Distance</Text>
        </Chip>
        <Chip
          selected={selectedFilters.openNow}
          onPress={() => toggleFilter("openNow")}
          style={styles.chip}
        >
          <Text style={styles.labelChip}>Ouvert maintenant</Text>
        </Chip>
        <Chip
          selected={selectedFilters.price}
          onPress={() => toggleFilter("price")}
          style={styles.chip}
        >
          <Text style={styles.labelChip}>Prix</Text>
        </Chip>
      </View>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  searchbar: {
    flexDirection: "row",
    alignItems: "center",

    borderRadius: 20,
    paddingHorizontal: 16,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  labelChip: {
    fontFamily: "Montserrat-Medium",
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
    flexWrap: "wrap",
    justifyContent: "center",
    paddingVertical: 10,
  },
  chip: {
    margin: 5,
  },
  label: {
    fontFamily: "Montserrat-Medium",
  },
});
