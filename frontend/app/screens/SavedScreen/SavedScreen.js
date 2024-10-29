import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SavedContent from "../../components/SavedScreen/SavedContent";

const SavedScreen = () => {
  return (
    <View style={styles.container}>
      <SavedContent />
    </View>
  );
};

export default SavedScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    marginBottom: 60,
  },
});
