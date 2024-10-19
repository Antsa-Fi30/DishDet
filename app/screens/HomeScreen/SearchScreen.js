import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchContent from "../../components/SearchScreen/SearchContent";

const SearchScreen = () => {
  return (
    <SafeAreaView>
      <SearchContent />
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({});
