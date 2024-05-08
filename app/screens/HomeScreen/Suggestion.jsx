import { StyleSheet, View } from "react-native";
import React from "react";
import SuggestionList from "../../components/SuggestionScreen/SuggestionList";
import { useTheme } from "react-native-paper";
import { Suggest } from "../../constants/Suggest";

// import {} from "react-native-google-places";

export default function Suggestion() {
  const theme = useTheme();

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <SuggestionList DATA={Suggest} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: 10,
    // margin: 5,
    // padding: 8,
  },
});
