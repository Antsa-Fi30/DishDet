import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Card, Text, Title, Paragraph } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

const RestaurantCard = ({ name }) => {
  return (
    <TouchableOpacity>
      <Card mode="contained" style={styles.card}>
        {/* Image en entête */}
        <Image source={require("../../../assets/1.jpg")} style={styles.image} />

        {/* Contenu de la carte */}
        <Card.Content>
          <Title style={styles.title}>{name}</Title>
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
    </TouchableOpacity>
  );
};

export default RestaurantCard;

const styles = StyleSheet.create({
  card: {
    width: 200,
    maxWidth: 200,
    backgroundColor: "#fff",
    marginTop: 10,
    borderRadius: 20,
    overflow: "hidden",
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
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontFamily: "Montserrat-Bold",
    marginTop: 10,
    fontSize: 15,
  },
  location: {
    fontFamily: "Montserrat-Regular",
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
