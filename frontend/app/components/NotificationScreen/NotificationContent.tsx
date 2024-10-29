import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import NotificationCard from "./NotificationCard";

const NotificationContent = () => {
  const notificationsData = [
    {
      id: 1,
      title: "Nouvelle offre spéciale",
      message: "Découvrez notre promotion spéciale sur les pizzas ce week-end.",
      timestamp: "Il y a 5 minutes",
    },
  ];
  return (
    <View>
      <FlatList
        data={notificationsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NotificationCard notification={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NotificationContent;

const styles = StyleSheet.create({});
