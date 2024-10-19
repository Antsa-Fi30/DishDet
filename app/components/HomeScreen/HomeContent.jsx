import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import SearchSource from "./SearchSource";
import RestoNearby from "./RestoNearby";

const HomeContent = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchSource navigation={navigation} />
      <Text style={styles.presentation}>
        Navigate the safest food outlet in few clicks!
      </Text>
      <RestoNearby />
    </SafeAreaView>
  );
};

export default HomeContent;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "no-wrap",
    justifyContent: "center",
    paddingVertical: 15,
  },
  presentation: {
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
    fontSize: 25,
    marginHorizontal: 20,
  },
});
