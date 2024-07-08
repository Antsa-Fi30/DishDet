import { StyleSheet, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const RestoDetailsHeader = ({ uriPhoto }) => {
  const navigation = useNavigation();
  return (
    <View>
      <Image
        source={{ uri: uriPhoto }}
        style={{ width: "100%", height: 300 }}
      />
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default RestoDetailsHeader;

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 15,
    display: "flex",
    gap: 7,
  },
  btnContainer: {
    position: "absolute",
    top: 27,
    left: 20,
    zIndex: 10,
    padding: 4,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    borderRadius: 50,
  },
});
