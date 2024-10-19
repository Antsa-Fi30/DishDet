import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card, Text, Title, Paragraph } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

const RestaurantCard = () => {
  return (
    <Card style={styles.card}>
      {/* Image en entête */}
      <Image source={require("../../../assets/1.jpg")} style={styles.image} />

      {/* Contenu de la carte */}
      <Card.Content>
        <Title style={styles.title}>Nom du Restaurant</Title>
        <Paragraph style={styles.location}>
          <MaterialIcons name="location-on" size={16} color="gray" /> Paris,
          France
        </Paragraph>

        {/* Section de notation */}
        <View style={styles.cardFooter}>
          <View style={styles.ratingContainer}>
            <MaterialIcons name="star" size={18} color="#FFD700" />
            <MaterialIcons name="star" size={18} color="#FFD700" />
            <MaterialIcons name="star" size={18} color="#FFD700" />
            <MaterialIcons name="star-half" size={18} color="#FFD700" />
            <MaterialIcons name="star-outline" size={18} color="#FFD700" />
          </View>
          <View>
            <TouchableOpacity>
              <MaterialIcons name="bookmark-outline" size={18} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 4, // Pour ajouter un effet d'ombre (Android uniquement)
  },
  cardFooter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: "100%",
    height: 150,
  },
  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  location: {
    flexDirection: "row",
    alignItems: "center",
    color: "gray",
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
});
