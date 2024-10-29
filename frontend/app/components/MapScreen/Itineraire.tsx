import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Itineraire = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.routeButton} onPress={onPress}>
      <Text style={styles.routeButtonText}>Tracer l'itinéraire</Text>
    </TouchableOpacity>
  );
};

export default Itineraire;

const styles = StyleSheet.create({
  routeButton: {
    position: "absolute",
    left: 100,
    top: 20,
  },
  routeButtonText: {
    fontFamily: "Montserrat-SemiBold",
  },
});
