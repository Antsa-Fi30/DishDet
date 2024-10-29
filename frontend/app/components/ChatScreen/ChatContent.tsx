import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatSearch from "./ChatSearch";
import ChatLists from "./ChatLists";

const ChatContent = () => {
  return (
    <View style={styles.container}>
      <ChatSearch />
      <ChatLists />
    </View>
  );
};

export default ChatContent;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 60,
  },
});
