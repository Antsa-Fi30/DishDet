import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { useTheme, Text } from "react-native-paper";

const SuggestionItem = ({ restaurant }) => {
  const navigation = useNavigation();
  const theme = useTheme();
  const { t } = useTranslation();

  const getStars = (rating) => {
    rating = Math.min(5, Math.max(0, rating));
    const filledStars = Array.from({ length: rating }, (_, i) => "★");
    const emptyStars = Array.from({ length: 5 - rating }, (_, i) => "☆");
    const stars = filledStars.concat(emptyStars);
    return stars.join(" ");
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.push("Suggestion details", {
          restaurant: restaurant,
        });
      }}
      style={[styles.box, { backgroundColor: theme.colors.elevation.level2 }]}
    >
      <View style={styles.container}>
        <Image source={require("../../../assets/4.jpg")} style={styles.image} />

        <View style={styles.subContainer}>
          <Text
            style={[
              styles.text,
              styles.nameText,
              { color: theme.colors.onSurface },
            ]}
          >
            {restaurant.name}
          </Text>
          <Text
            style={[
              styles.text,
              styles.locationText,
              { color: theme.colors.onSurfaceVariant },
            ]}
          >
            {restaurant.location}
          </Text>
          <View style={styles.row}>
            <Ionicons
              color={theme.colors.primary}
              name="location-sharp"
              size={20}
            />
            <Text
              style={[
                styles.text,
                styles.streetText,
                { color: theme.colors.onSurface },
              ]}
            >
              {restaurant.street}
            </Text>
          </View>
          <Text style={[styles.text, styles.starText]}>
            {getStars(restaurant.star)}
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.iconContainer,
          { backgroundColor: theme.colors.elevation.level4 },
        ]}
      >
        <Ionicons
          color={theme.colors.secondary}
          name="chevron-forward-outline"
          size={20}
        />
      </View>
    </TouchableOpacity>
  );
};

export default SuggestionItem;

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginVertical: 8,
    borderRadius: 12,
    elevation: 1,
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  subContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginLeft: 12,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
  },
  iconContainer: {
    borderRadius: 50,
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  text: {
    fontFamily: "Poppins",
  },
  nameText: {
    fontWeight: "800",
    fontSize: 15,
  },
  locationText: {
    fontSize: 14,
    marginTop: 2,
  },
  streetText: {
    fontWeight: "600",
    fontSize: 14,
    marginLeft: 5,
    overflow: "scroll",
  },
  starText: {
    fontSize: 14,
    marginTop: 4,
  },
});
