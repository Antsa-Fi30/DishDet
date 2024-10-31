import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import SearchInput from "../SearchScreen/SeachInput";
import SavedList from "./SavedList";

const SavedContent = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SearchInput />
      <SavedList />
    </ScrollView>
  );
};

export default SavedContent;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 8,
    marginVertical: 10,
    marginBottom: 30,
  },
});
