import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import SearchSource from "./SearchSource";
import RestoNearby from "./RestoNearby";

const HomeContent = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchSource />
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
    marginVertical: 10,
    display: "flex",
    flexWrap: "no-wrap",
    justifyContent: "center",
  },
  presentation: {
    textAlign: "center",
    fontSize: 25,
    marginHorizontal: 20,
  },
});
