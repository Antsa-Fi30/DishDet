import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { RestaurantListNavigationProp } from "../../constants/NavigationType";

type Restaurant = {
  id: string;
  name: string;
  location: string;
  image: string;
};

type ExploreCategory = {
  id: string;
  title: string;
  image: string;
};

// Simulez des données pour les restaurants Nearby
const restaurants: Restaurant[] = [
  {
    id: "1",
    name: "Restaurant 1",
    location: "Paris, France",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "Restaurant 2",
    location: "Paris, France",
    image: "https://via.placeholder.com/150",
  },
  // Ajoutez d'autres restaurants si nécessaire
];

// Simulez des données pour les catégories Explore
const exploreCategories: ExploreCategory[] = [
  { id: "1", title: "Emotions", image: "https://via.placeholder.com/150" },
  { id: "2", title: "Hungry", image: "https://via.placeholder.com/150" },
  { id: "3", title: "Romantic", image: "https://via.placeholder.com/150" },
];

const ViewAllPage: React.FC = () => {
  const navigation = useNavigation<RestaurantListNavigationProp>();

  const renderRestaurant = ({ item }: { item: Restaurant }) => (
    <TouchableOpacity
      style={styles.restaurantCard}
      onPress={() => navigation.navigate("RestaurantDetails")}
    >
      <Image
        source={require("../../../assets/15.jpg")}
        style={styles.restaurantImage}
      />
      <View>
        <Text style={styles.restaurantName}>{item.name}</Text>
        <Text style={styles.restaurantLocation}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderExploreCategory = ({ item }: { item: ExploreCategory }) => (
    <TouchableOpacity style={styles.exploreCard}>
      <Avatar.Image source={require("../../../assets/1.jpg")} size={80} />
      <Text style={styles.exploreTitle}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.sectionTitle}>Explore</Text>
      <FlatList
        data={exploreCategories}
        renderItem={renderExploreCategory}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.exploreList}
      />

      <Text style={styles.sectionTitle}>Nearby</Text>
      <FlatList
        data={restaurants}
        renderItem={renderRestaurant}
        keyExtractor={(item) => item.id}
        style={styles.restaurantList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: "Montserrat-SemiBold",
    marginBottom: 10,
  },
  exploreList: {
    marginBottom: 20,
  },
  exploreCard: {
    marginRight: 15,
    alignItems: "center",
  },

  exploreTitle: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    marginTop: 5,
  },
  restaurantList: {
    marginBottom: 20,
  },
  restaurantCard: {
    flexDirection: "row",
    marginBottom: 15,
    borderWidth: 1,
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

export default ViewAllPage;
