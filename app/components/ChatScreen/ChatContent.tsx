import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatSearch from "./ChatSearch";
import ChatMessages from "./ChatMessages";

const ChatContent = () => {
  return (
    <View>
      <ChatSearch />
      <ChatMessages />
    </View>
  );
};

export default ChatContent;

const styles = StyleSheet.create({});
