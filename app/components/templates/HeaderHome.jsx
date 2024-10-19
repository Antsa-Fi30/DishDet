import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";

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
    fontFamily: "Montserrat-Regular",
    fontSize: 16,
    color: "#ddd",
  },
});
