import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import SuggestionItem from "./SuggestionItem";
import { useTheme } from "react-native-paper";
import { Suggest } from "../../constants/Suggest";

const SuggestionList = () => {
  const theme = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Suggest}
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
    marginTop: 10,
    margin: 5,
    padding: 8,
  },
});
