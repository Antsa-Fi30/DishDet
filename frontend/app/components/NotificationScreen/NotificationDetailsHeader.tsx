import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import HeaderPage from "../templates/HeaderPage";

const NotificationDetailsHeader = () => {
  return (
    <SafeAreaView>
      <HeaderPage title={"Notification details"} />
    </SafeAreaView>
  );
};

export default NotificationDetailsHeader;

const styles = StyleSheet.create({});
