import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RestoList from "../HomeScreen/RestoList";

const data2 = [
  { id: "4", name: "Restaurant 4" },
  { id: "5", name: "Restaurant 5" },
  { id: "6", name: "Restaurant 6" },
];

const SavedList = () => {
  return (
    <View>
      <RestoList
        restos={data2}
        type={"Your favorite"}
        label={"There are your favorite restos"}
      />
    </View>
  );
};

export default SavedList;

const styles = StyleSheet.create({});
