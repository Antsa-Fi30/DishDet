import { StyleSheet, View, FlatList } from "react-native";
import React from "react";

const RestoPhoto = ({ photo }) => {
  return (
    <View>
      <Heading text={"Photos"} />
      <FlatList data={photo} />
    </View>
  );
};

export default RestoPhoto;

const styles = StyleSheet.create({});
