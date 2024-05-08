import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import Setting from "./Setting";

const Parameters = ({ options }) => {
  const theme = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <FlatList
        showsVerticalScrollIndicator={false}
        data={options}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Setting parameters={item} />}
      />
    </View>
  );
};

export default Parameters;

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    margin: 5,
    padding: 8,
  },
});
