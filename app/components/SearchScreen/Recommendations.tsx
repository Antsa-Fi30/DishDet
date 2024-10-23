import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import { Text } from "react-native-paper";
import React from "react";
import HeadingTitle from "../templates/HeadingTitle";
import RestaurantCard from "../HomeScreen/RestaurantCard";
import RestoList from "../HomeScreen/RestoList";

const Recommendations = ({ data }) => {
  return (
    <View>
      <RestoList
        restos={data}
        type={"Recommendations"}
        label={"Recommendation based on your emotions"}
      />
    </View>
  );
};

export default Recommendations;

const styles = StyleSheet.create({});
