import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Text, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { RestaurantListNavigationProp } from "../../constants/NavigationType";
import React from "react";

type HeadingTitleProps = {
  text: string;
  viewAll: boolean;
};

const HeadingTitle: React.FC<HeadingTitleProps> = ({ text, viewAll }) => {
  const navigation = useNavigation<RestaurantListNavigationProp>();
  const theme = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      {viewAll && (
        <TouchableOpacity onPress={() => navigation.navigate("RestaurantList")}>
          <Text style={styles.detailLink}>View All</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default HeadingTitle;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailLink: {
    color: "red",
    fontFamily: "Montserrat-Medium",
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 15,
  },
});
