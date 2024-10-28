import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RestoList from "../HomeScreen/RestoList";

const data2 = [
  { id: 1, name: "Restaurant 4", favorite: true },
  { id: 2, name: "Restaurant 5", favorite: true },
  { id: 3, name: "Restaurant 6", favorite: true },
];

const SavedList = () => {
  return (
    <View>
      <RestoList
        restos={data2}
        title={"Your favorite"}
        label={"There are your favorite restos"}
      />
    </View>
  );
};

export default SavedList;

const styles = StyleSheet.create({});
