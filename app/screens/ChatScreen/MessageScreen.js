import { StyleSheet, Text, View } from "react-native";
import React from "react";
import MessageContent from "../../components/ChatScreen/MessageContent";

const MessageScreen = () => {
  return (
    <View style={styles.container}>
      <MessageContent />
    </View>
  );
};

export default MessageScreen;

const styles = StyleSheet.create({});
