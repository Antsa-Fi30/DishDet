import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import SuggestionItem from "./SuggestionItem";
import { useTheme } from "react-native-paper";

const SuggestionList = ({ DATA }) => {
  const theme = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({ item, index }) => (
          <SuggestionItem key={index} restaurant={item} />
        )}
      />
    </View>
  );
};

export default SuggestionList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
