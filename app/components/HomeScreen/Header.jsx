import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { Searchbar, Text } from "react-native-paper";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Dish Detective</Text>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
        />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    fontFamily: "Poppins-bold",
    fontSize: 27,
    marginTop: 10,
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
});
