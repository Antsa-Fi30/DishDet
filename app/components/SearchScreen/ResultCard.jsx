// ResultCard.js
import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const ResultCard = ({ image, name, location, rating }) => {
  return (
    <>
      <View style={styles.ResultCard}>
        <Image source={require("../../../assets/1.jpg")} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.location}>{location}</Text>
          <Text style={styles.rating}>⭐ {rating}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  ResultCard: {
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#fff",
    elevation: 3, // For Android shadow
    shadowColor: "#000", // For iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
  },
  details: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  location: {
    color: "gray",
    marginVertical: 5,
  },
  rating: {
    fontSize: 16,
    color: "#FFD700", // Gold color for star rating
  },
});

export default ResultCard;
