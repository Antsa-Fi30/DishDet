import { StyleSheet, View, FlatList } from "react-native";
import { useState } from "react";
import { Searchbar, Text } from "react-native-paper";
import axios from "axios";

const Header = ({ location }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const onChangeSearch = (query) => {
    setSearchQuery(query);

    const options = {
      method: "GET",
      url: `https://api.foursquare.com/v3/autocomplete?query=${query}&ll=${location.coords.latitude}%2C${location.coords.longitude}`,
      headers: {
        accept: "application/json",
        Authorization: "fsq3N7raVaNIbphpvNu/Wn0e/5AajPf7ixOYOsQaMxyIUc4=",
      },
    };

    axios
      .request(options)
      .then((response) => {
        if (response.data.results) {
          setSearchResults(response.data.results);
        } else {
          setSearchResults([]);
        }
      })
      .catch(function (error) {
        console.error(error);
        setSearchResults([]);
      });
  };

  console.log("Search Results:", searchResults);

  if (searchResults.length === 0) {
    var renderItem = ({ item }) => (
      <View style={styles.resultItem}>
        <Text>Nothing Found</Text>
      </View>
    );
  } else {
    var renderItem = ({ item }) => (
      <View style={styles.resultItem}>
        <Text>{item.place.name}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Dish Detective</Text>
        {/* <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
          style={styles.searchBar}
        /> */}
        {searchResults && (
          <FlatList
            data={searchResults}
            renderItem={renderItem}
            keyExtractor={(index) => index.toString()} // Utilisez index si vous n'avez pas d'id unique
            style={styles.resultsList}
          />
        )}
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
  searchBar: {
    marginBottom: 10,
  },
  resultItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
