import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, Switch, Divider, useTheme } from "react-native-paper";

const Switcher = ({ label, value, update }) => {
  const theme = useTheme();

  return (
    <View>
      <View style={styles.list}>
        <Text>{label}</Text>
        <Switch
          color={theme?.colors.primary}
          value={value}
          onValueChange={update}
        />
      </View>
      <Divider />
    </View>
  );
};

export default Switcher;

const styles = StyleSheet.create({
  list: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },
});
