import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IconButton, Text } from "react-native-paper";

const LanguageScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.headTitle}>
          <IconButton
            style={styles.buttonback}
            icon={"arrow-left"}
            size={30}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}>Change language </Text>
        </View>
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
  },
  parameters: {
    marginVertical: 10,
  },
});
