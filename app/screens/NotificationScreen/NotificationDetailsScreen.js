import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import NotificationDetails from "../../components/NotificationScreen/NotificationDetails";

const NotificationDetailsScreen = () => {
  return (
    <SafeAreaView>
      <NotificationDetails />
    </SafeAreaView>
  );
};

export default NotificationDetailsScreen;

const styles = StyleSheet.create({});
