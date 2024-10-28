import {
  StyleSheet,
  View,
  ScrollView,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import { Text, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { RestaurantDetailsProp } from "../../constants/NavigationType";

type Restaurant = {
  id: number;
  name: string;
  location: string;
  image: string;
};

const RestosLists = () => {
  const navigation = useNavigation<RestaurantDetailsProp>();
  const theme = useTheme();

  const restaurants: Restaurant[] = [
    {
      id: 1,
      name: "Restaurant 1",
      location: "Paris, France",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Restaurant 2",
      location: "Paris, France",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Restaurant 3",
      location: "Paris, France",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Restaurant 4",
      location: "Paris, France",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      name: "Restaurant 5",
      location: "Paris, France",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      name: "Restaurant 6",
      location: "Paris, France",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 7,
      name: "Restaurant 7",
      location: "Paris, France",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 8,
      name: "Restaurant 8",
      location: "Paris, France",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 9,
      name: "Restaurant 9",
      location: "Paris, France",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 10,
      name: "Restaurant 10",
      location: "Paris, France",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 11,
      name: "Restaurant 11",
      location: "Paris, France",
      image: "https://via.placeholder.com/150",
    },
    // Ajoutez d'autres restaurants si nécessaire
  ];

  return (
    <View style={styles.container}>
      <View style={styles.subcontainer}>
        <FlatList
          style={styles.restaurantList}
          data={restaurants}
          renderItem={({ item }) => (
            <Pressable
              style={[
                styles.restaurantCard,
                { backgroundColor: theme.colors.elevation.level1 },
              ]}
              onPress={() =>
                navigation.navigate("RestaurantDetails", { restaurant: item })
              }
            >
              <Image
                source={require("../../../assets/1.jpg")} // Utilisation de l'URL de l'image du restaurant
                style={styles.restaurantImage}
              />
              <View>
                <Text style={styles.restaurantName}>{item.name}</Text>
                <Text style={styles.restaurantLocation}>{item.location}</Text>
              </View>
            </Pressable>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </View>
  );
};

export default RestosLists;

const styles = StyleSheet.create({
  container: {
    maxHeight: "100%",
  },
  subcontainer: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
    paddingVertical: 13,
  },
  restaurantList: {
    marginBottom: 20,
  },
  restaurantCard: {
    flexDirection: "row",
    marginBottom: 15,
    borderWidth: 0.5,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  restaurantImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginRight: 15,
  },
  restaurantName: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
  },
  restaurantLocation: {
    fontFamily: "Montserrat-Medium",
    fontSize: 12,
    color: "#aaa",
  },
});
