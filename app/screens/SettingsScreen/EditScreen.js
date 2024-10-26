import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IconButton, Text, useTheme } from "react-native-paper";
import SettingsHead from "../../components/templates/SettingsHead";
import EditContent from "../../components/Settings/EditContent";

const EditScreen = () => {
  const navigation = useNavigation();
  const theme = useTheme();
  return (
    <ScrollView
      style={[
        styles.container,
        { backgroundColor: theme.colors.elevation.level1 },
      ]}
    >
      <View style={styles.subContainer}>
        <SettingsHead title={"Edit your profil"} />
        <View style={styles.parameters}>
          <EditContent />
        </View>
      </View>
    </ScrollView>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 25,
  },
  subContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 16,
  },
  headTitle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  buttonback: {
    position: "absolute",
    left: -10,
  },
  parameters: {
    marginVertical: 10,
  },
});
