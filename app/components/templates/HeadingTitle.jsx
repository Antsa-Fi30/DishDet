import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const HeadingTitle = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{text}</Text>
      <TouchableOpacity style={styles.detailLink}>
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
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "700",
    fontSize: 18,
  },
});
