import { StyleSheet, Text, SafeAreaView } from "react-native";
import React from "react";
import SearchSource from "./SearchSource";
import RestoList from "././RestoList";
import Actuality from "./Actuality";
import ExploreList from "./ExploreList";
import Promotions from "./Promotions";

const data1 = [
  { id: "1", name: "Restaurant 1" },
  { id: "2", name: "Restaurant 2" },
  { id: "3", name: "Restaurant 3" },
  { id: "4", name: "Restaurant 4" },
  { id: "5", name: "Restaurant 5" },
  { id: "6", name: "Restaurant 6" },
];

const data2 = [
  { id: "4", name: "Restaurant 4" },
  { id: "5", name: "Restaurant 5" },
  { id: "6", name: "Restaurant 6" },
];

const data3 = [
  { id: "4", name: "Restaurant 4" },
  { id: "5", name: "Restaurant 5" },
  { id: "9", name: "Restaurant 9" },
];

const typeresto = [
  { id: "1", name: "Emotions" },
  { id: "2", name: "Hungry" },
  { id: "3", name: "Romantic" },
  { id: "4", name: "Nothing" },
  { id: "5", name: "Something" },
  { id: "6", name: "Sad" },
];

const HomeContent = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <SearchSource navigation={navigation} />
      <Promotions />
      {/* <Text style={styles.presentation}>
        Navigate the safest food outlet in few clicks!
      </Text> */}
      <ExploreList typeresto={typeresto} />
      <RestoList restos={data1} type={"Nearby"} />
      <Actuality />
    </SafeAreaView>
  );
};

export default HomeContent;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "no-wrap",
    justifyContent: "center",
    paddingBottom: 15,
  },
  presentation: {
    fontFamily: "Montserrat-Bold",
    textAlign: "center",
    fontSize: 25,
    marginHorizontal: 20,
  },
});
