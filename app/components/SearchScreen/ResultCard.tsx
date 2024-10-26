// ResultCard.js
import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text, Avatar } from "react-native-paper";
import {
  RestaurantDetailsProp,
  RestaurantDetailsRouteProp,
} from "../../constants/NavigationType";

type RestaurantResult = {
  name: string;
  location: string;
  rating: number;
};

type ResultCardProps = {
  item: RestaurantResult;
};

const ResultCard: React.FC<ResultCardProps> = ({ item }) => {
  const navigation = useNavigation<RestaurantDetailsProp>();

  const getStars = (rating: number) => {
    rating = Math.min(3, Math.max(0, rating));
    const filledStars = Array.from({ length: rating }, (_, i) => "★");
    const emptyStars = Array.from({ length: 3 - rating }, (_, i) => "☆");
    const stars = filledStars.concat(emptyStars);
    return stars.join(" ");
  };

  return (
    <>
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.push("RestaurantDetails", { product: item })}
      >
        <Avatar.Image source={require("../../../assets/1.jpg")} />
        <View style={styles.cardContent}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.description}>{item.location}</Text>
          <Text style={styles.rating}>{getStars(item.rating)}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  contentList: {
    margin: 1,
    flex: 1,
  },
  cardContent: {
    marginLeft: 20,
    marginTop: 10,
    flex: 1,
  },
  card: {
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 10,
    marginLeft: 10,
    marginRight: 10,
    marginVertical: 10,
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    flex: 1,
    color: "black",
    fontFamily: "Montserrat-Bold",
  },
  description: {
    fontSize: 14,
    fontFamily: "Montserrat-Medium",
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
    color: "black",
    justifyContent: "flex-start",
  },
  price: {
    fontWeight: "bold",
  },
  rating: {
    color: "orange",
    marginTop: 5,
    fontSize: 18,
  },
});

export default ResultCard;
