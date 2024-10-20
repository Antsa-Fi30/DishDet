import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ResultList from "./ResultList";

const Result = ({ data }) => {
  return (
    <View>
      <ResultList data={data} />
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({});
