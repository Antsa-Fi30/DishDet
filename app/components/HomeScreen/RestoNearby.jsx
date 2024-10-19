import React from "react";
import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import HeadingTitle from "../templates/HeadingTitle";
import RestaurantCard from "./RestaurantCard";

const data = [
  { id: "1", name: "Restaurant 1" },
  { id: "2", name: "Restaurant 2" },
  { id: "3", name: "Restaurant 3" },
  { id: "4", name: "Restaurant 4" },
  { id: "5", name: "Restaurant 5" },
  { id: "6", name: "Restaurant 6" },
];

const RestoNearby = () => {
  const numColumns = 3; // Nombre de colonnes que tu souhaites afficher

  return (
    <View style={styles.container}>
      <HeadingTitle text={"Outlet around you"} />
      <FlatList
        data={data}
        renderItem={({ item }) => <RestaurantCard style={styles.card} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default RestoNearby;

const styles = StyleSheet.create({
  container: {
    marginTop: "5%",
    paddingHorizontal: 10,
  },
  list: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingVertical: 2,
    paddingHorizontal: 1,
  },
  card: {
    flex: 1,
    marginHorizontal: 5,
    maxWidth: Dimensions.get("window").width / 3 - 20, // Limite la largeur de chaque carte à 1/3 de l'écran
  },
});
