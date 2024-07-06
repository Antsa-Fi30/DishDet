import { StyleSheet, View } from "react-native";
import React from "react";
import { Text } from "react-native-paper";

const Heading = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titre}>{text}</Text>
    </View>
  );
};

export default Heading;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  titre: {
    fontFamily: "Poppins-bold",
    fontSize: 17,
  },
});
