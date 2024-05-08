import { StyleSheet, View } from "react-native";
import React from "react";
import { useTheme } from "react-native-paper";
import Parameters from "../../components/SettingsScreen/Parameters";
import { SettingsMenu } from "../../constants/SettingsMenu";

const SettingsScreen = () => {
  const theme = useTheme();
  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Parameters options={SettingsMenu} />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    maxHeight: "100%",
  },
});
