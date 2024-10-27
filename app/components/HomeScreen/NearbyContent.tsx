import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchSource from "./SearchSource";
import RestoList from "././RestoList";
import ExploreList from "./ExploreList";
import Promotions from "./Promotions";

const data1 = [
  { id: 1, name: "Restaurant 1" },
  { id: 2, name: "Restaurant 2" },
  { id: 3, name: "Restaurant 3" },
  { id: 4, name: "Restaurant 4" },
  { id: 5, name: "Restaurant 5" },
  { id: 6, name: "Restaurant 6" },
];

const data2 = [
  { id: 4, name: "Restaurant 4" },
  { id: 5, name: "Restaurant 5" },
  { id: 6, name: "Restaurant 6" },
];

const data3 = [
  { id: 4, name: "Restaurant 4" },
  { id: 5, name: "Restaurant 5" },
  { id: 9, name: "Restaurant 9" },
];

const typeresto = [
  { id: 1, name: "Emotions" },
  { id: 2, name: "Hungry" },
  { id: 3, name: "Romantic" },
  { id: 4, name: "Nothing" },
  { id: 5, name: "Something" },
  { id: 6, name: "Sad" },
];

const NearbyContent = () => {
  return (
    <View style={styles.container}>
      <SearchSource />
      <Promotions />
      <ExploreList typeresto={typeresto} label={""} />
      <RestoList restos={data1} title={"Nearby"} label={""} />
    </View>
  );
};

export default NearbyContent;

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
  },
});
