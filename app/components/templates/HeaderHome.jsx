import { StyleSheet, Text, View } from "react-native";

//Icons
import Octicons from "@expo/vector-icons/Octicons";

const HeaderHome = ({ name }) => {
  return (
    <View style={[styles.label]}>
      <Octicons name="location" size={24} color="black" />
      <Text style={styles.location}>{name}</Text>
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  label: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  location: {
    fontSize: 16,
    color: "#ddd",
  },
});
