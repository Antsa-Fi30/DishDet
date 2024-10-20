import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Octicons from "@expo/vector-icons/Octicons";
import { useNavigation } from "@react-navigation/native";

const HeaderSearch = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backbutton}
          onPress={() => navigation.goBack()}
        >
          <Octicons
            style={{ marginRight: 20 }}
            name="arrow-left"
            size={35}
            color="black"
          />
        </TouchableOpacity>
        <View style={styles.location}>
          <Text style={styles.label}>Search</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HeaderSearch;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    paddingVertical: 15,
    backgroundColor: "transparent ",
  },
  label: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 25,
    color: "#000",
  },
  location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  backbutton: {
    position: "absolute",
    left: 30,
  },
});
