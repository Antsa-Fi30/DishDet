import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { IconButton, Text } from "react-native-paper";

const NotificationScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.headTitle}>
          <IconButton
            icon={"arrow-left"}
            size={30}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.title}>Change your location? </Text>
        </View>
        <View style={styles.parameters}>
          <Text style={styles.title}>You are </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default NotificationScreen;

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
    justifyContent: "space-around",
    alignItems: "center",
  },
  parameters: {
    marginVertical: 10,
  },
});
