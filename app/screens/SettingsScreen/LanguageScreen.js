import React from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Text } from "react-native-paper";
import SettingsHead from "../../components/templates/SettingsHead";

const LanguageScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <SettingsHead title={"Change your language"} />
        <View style={styles.parameters}>
          <Text style={styles.title}>You are </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default LanguageScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 10,
  },
  subContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  title: {
    fontFamily: "Montserrat-SemiBold",
    fontSize: 20,
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
    color: "red",
  },
  parameters: {
    marginVertical: 10,
  },
});
