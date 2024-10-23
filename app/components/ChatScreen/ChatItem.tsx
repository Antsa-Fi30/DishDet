// ChatItem.js
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ChatItem = ({ name, lastMessage, timestamp }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Message")}
    >
      <Image source={require("../../../assets/15.jpg")} style={styles.avatar} />
      <View style={styles.details}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.lastMessage}>{lastMessage}</Text>
      </View>
      <Text style={styles.timestamp}>{timestamp}</Text>
    </TouchableOpacity>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginBottom: 15,
    borderRadius: 25,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
  },
  lastMessage: {
    fontFamily: "Montserrat-Medium",
    fontSize: 14,
    color: "gray",
  },
  timestamp: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    color: "gray",
  },
});
