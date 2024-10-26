import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import HeadingTitle from "../templates/HeadingTitle";
import RestaurantCard from "./RestaurantCard";
import { Text } from "react-native-paper";
import React from "react";

type RestoType = {
  id: number;
  name: string;
};

type RestoProps = {
  restos: RestoType[];
  title: string;
  label: string;
};

const RestoList: React.FC<RestoProps> = ({ restos, title, label }) => {
  return (
    <View style={styles.container}>
      <HeadingTitle text={title} viewAll />
      {label && <Text style={styles.label}>{label}</Text>}
      <FlatList
        data={restos}
        renderItem={({ index, item }) => (
          <RestaurantCard key={index} restaurant={item} />
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

export default RestoList;

const styles = StyleSheet.create({
  container: {
    marginVertical: "2%",
  },
  list: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    paddingVertical: 2,
    paddingHorizontal: 1,
  },
  label: {
    fontFamily: "Montserrat-Regular",
    paddingVertical: 10,
    marginLeft: 5,
  },
  card: {
    flex: 1,
    marginHorizontal: 5,
    maxWidth: Dimensions.get("window").width / 3 - 20, // Limite la largeur de chaque carte à 1/3 de l'écran
  },
});
