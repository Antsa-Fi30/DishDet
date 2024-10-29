import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ChatContent from "../../components/ChatScreen/ChatContent";

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <ChatContent />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    marginBottom: 60,
  },
});
