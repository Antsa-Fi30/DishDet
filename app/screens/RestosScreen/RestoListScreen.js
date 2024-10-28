import { StyleSheet, View } from "react-native";
import React from "react";
import RestoLists from "../../components/Restos/RestosLists";

const RestoListScreen = () => {
  return (
    <View
      style={{
        height: "100%",
        paddingHorizontal: 14,
        paddingBottom: 14,
        marginTop: 10,
      }}
    >
      <RestoLists />
    </View>
  );
};

export default RestoListScreen;

const styles = StyleSheet.create({});
