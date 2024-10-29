import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Text, Title, Paragraph, useTheme } from "react-native-paper";
import { MaterialIcons } from "@expo/vector-icons";

type Restos = {
  id: number;
  name: string;
};

type RestaurantDetailsContentProps = {
  restaurant: Restos;
};

const RestaurantDetailsContent: React.FC<RestaurantDetailsContentProps> = ({
  restaurant,
}) => {
  const theme = useTheme();
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: theme.colors.background,
        height: "100%",
        maxHeight: "100%",
      }}
    >
      {/* Image principale */}
      <Image source={require("../../../assets/1.jpg")} style={styles.image} />

      {/* Titre et localisation */}
      <View style={styles.detailsContainer}>
        <Title style={styles.title}>{restaurant.name}</Title>
        <Paragraph style={styles.location}>
          <MaterialIcons name="location-on" size={16} color="gray" /> Paris,
          France
        </Paragraph>

        {/* Section de description (Exemple de description, peut être ajustée selon les données disponibles) */}
        <Paragraph style={styles.description}>
          Description du restaurant, informations sur le type de cuisine,
          ambiance, et autres détails importants.
        </Paragraph>

        {/* Section de notation */}
        <View style={styles.ratingContainer}>
          <MaterialIcons name="star" size={18} color="#FFD700" />
          <MaterialIcons name="star" size={18} color="#FFD700" />
          <MaterialIcons name="star" size={18} color="#FFD700" />
          <MaterialIcons name="star-half" size={18} color="#FFD700" />
          <MaterialIcons name="star-outline" size={18} color="#FFD700" />
        </View>
      </View>
    </ScrollView>
  );
};

export default RestaurantDetailsContent;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 250,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 24,
    marginBottom: 10,
  },
  location: {
    fontFamily: "Montserrat-Regular",
    color: "gray",
    fontSize: 14,
    marginBottom: 10,
  },
  description: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
    lineHeight: 24,
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
});
