import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Octicons from "@expo/vector-icons/Octicons";

const HeaderHome = () => {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.container}>
        <View style={styles.location}>
          <Octicons name="location" size={20} color="black" />
          <Text style={styles.label}>Time square way, Brooklyn street</Text>
        </View>
        <TouchableOpacity>
          <Octicons name="bell" size={20} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 25,
    paddingBottom: 10,
    backgroundColor: "transparent",
  },
  label: {
    fontFamily: "Montserrat-Regular",
    fontSize: 13,
    color: "#000",
  },
  location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});
