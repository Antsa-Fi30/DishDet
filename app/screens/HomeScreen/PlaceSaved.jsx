import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { useSelector } from "react-redux";
import Items from "../../components/HomeScreen/Items";

const PlaceSaved = () => {
  const favorites = useSelector((state) => state.favorites);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      <FlatList
        data={favorites}
        horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Items
            name={item.name}
            adresse={item.location.formatted_address}
            id={item.id}
            item={item}
            icon={item.categories[0].icon}
          />
        )}
      />
    </View>
  );
};

export default PlaceSaved;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
