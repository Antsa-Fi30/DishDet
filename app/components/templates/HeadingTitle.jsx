import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const HeadingTitle = ({ text, viewAll }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      <TouchableOpacity
        style={styles.detailLink}
        onPress={() => navigation.push(viewAll)}
      >
        <Text style={styles.detailLink}>View All</Text>
      </TouchableOpacity>
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
