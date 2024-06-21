import { StyleSheet, View } from "react-native";
import { Text, useTheme } from "react-native-paper";

import React from "react";
import { Ionicons } from "@expo/vector-icons";

const SuggestInfo = ({ name, region, location, star }) => {
  const getStars = (rating) => {
    rating = Math.min(5, Math.max(0, rating));
    const filledStars = Array.from({ length: rating }, (_, i) => "★");
    const emptyStars = Array.from({ length: 5 - rating }, (_, i) => "☆");
    const stars = filledStars.concat(emptyStars);
    return stars.join(" ");
  };
  const theme = useTheme();
  return (
    <View>
      <View
        style={{
          marginBottom: 20,
          display: "flex",
          gap: 3,
        }}
      >
        <Text
          style={{
            color: theme.colors.tertiary,
            fontFamily: "Poppins-bold",
            fontSize: 23,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Ionicons
            color={theme.colors.primary}
            name="restaurant-sharp"
            size={25}
            style={{ marginRight: 5 }}
          />
          {name}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins-bold",
            fontSize: 23,
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
          }}
        >
          {getStars(star)}
        </Text>
      </View>
      <View style={styles.subContainer}>
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 14,
            fontWeight: "400",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Ionicons
            color={theme.colors.primary}
            name="locate-sharp"
            size={25}
            style={{ marginRight: 5 }}
          />
          {region}
        </Text>
        <Text
          style={{
            fontFamily: "Poppins",
            fontSize: 14,
            fontWeight: "400",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Ionicons
            color={theme.colors.primary}
            name="location-sharp"
            size={25}
            style={{ marginRight: 5 }}
          />
          {location}
        </Text>
      </View>
    </View>
  );
};

export default SuggestInfo;

const styles = StyleSheet.create({
  subContainer: {
    display: "flex",
    gap: 10,
  },
});
