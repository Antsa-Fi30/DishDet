import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, useTheme } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";

const Welcome = () => {
  const theme = useTheme();
  return (
    <LinearGradient
      style={{ flex: 1 }}
      colors={[theme.colors.secondary, theme.colors.primary]}
    >
      <Text>Welcome</Text>
    </LinearGradient>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
