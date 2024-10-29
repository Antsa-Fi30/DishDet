// ChatItem.js
import { StyleSheet, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { ChatItemNavigationProp } from "../../constants/NavigationType";
import { Avatar, Text } from "react-native-paper";

const ChatItem = ({ chat }) => {
  const navigation = useNavigation<ChatItemNavigationProp>();
  return (
    <>
      <Pressable
        style={styles.container}
        onPress={() => navigation.navigate("Message", { chatId: "123" })}
      >
        <Avatar.Image
          source={require("../../../assets/15.jpg")}
          size={40}
          style={styles.avatar}
        />
        <View style={styles.details}>
          <Text style={styles.name}>{chat.name}</Text>
          <Text style={styles.lastMessage}>{chat.lastMessage}</Text>
        </View>
        <Text style={styles.timestamp}>{chat.timestamp}</Text>
      </Pressable>
    </>
  );
};

export default ChatItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 15,
    borderRadius: 25,
  },
  avatar: {
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    marginBottom: 3,
    fontWeight: "700",
  },
  lastMessage: {
    fontSize: 13,
    color: "gray",
  },
  timestamp: {
    fontSize: 12,
    color: "gray",
  },
});
