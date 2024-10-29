import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchContent from "../../components/SearchScreen/SearchContent";

const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchContent />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 0,
    marginBottom: 10,
  },
});
