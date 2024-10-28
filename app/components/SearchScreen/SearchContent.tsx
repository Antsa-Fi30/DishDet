import { StyleSheet, Text, ScrollView } from "react-native";
import React from "react";
import SeachInput from "./SeachInput";
import Recent from "./Recent";
import Result from "./Result";
import Recommendations from "./Recommendations";

const data = [
  { id: 1, name: "Restaurant 1", favorite: true },
  { id: 2, name: "Restaurant 2", favorite: true },
];

const SearchContent = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <SeachInput />
      <Recommendations data={data} />
      <Recent />
      <Result />
    </ScrollView>
  );
};

export default SearchContent;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
});
