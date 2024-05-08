import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Icon, Text, useTheme } from "react-native-paper";
import React from "react";
import { useTranslation } from "react-i18next";

const SuggestButton = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={() => console.log("Pressed")}
      >
        <Icon source="camera" color={theme.colors.secondary} size={30} />
        <Text style={styles.text}>{t("btn_save")}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SuggestButton;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    gap: 10,
  },
  text: {
    fontFamily: "Poppins",
  },
});
