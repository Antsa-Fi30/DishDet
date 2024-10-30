import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";

const LoadingScreen = () => {
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <ActivityIndicator color={theme.colors.primary} size={"large"} />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    marginVertical: 50,
    margin: "auto",
    alignSelf: "center",
  },
});
