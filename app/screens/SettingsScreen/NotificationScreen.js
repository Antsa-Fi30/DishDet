import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import SettingsHead from "../../components/templates/SettingsHead";
import NotificationContent from "../../components/Settings/NotificationContent";

const NotificationScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.subContainer}>
        <SettingsHead title={"Manage Notification"} />
        <View style={styles.parameters}>
          <NotificationContent />
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
