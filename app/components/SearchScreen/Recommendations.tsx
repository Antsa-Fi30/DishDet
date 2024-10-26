import { StyleSheet, View, FlatList, Dimensions } from "react-native";
import React from "react";
import RestoList from "../HomeScreen/RestoList";

type Recommendations = {
  id: number;
  name: string;
};

type RecommendationProps = {
  data: Recommendations[];
};

const Recommendations: React.FC<RecommendationProps> = ({ data }) => {
  return (
    <View>
      <RestoList
        title="Recommended"
        restos={data}
        label={"Recommendation based on your emotions"}
      />
    </View>
  );
};

export default Recommendations;

const styles = StyleSheet.create({});
