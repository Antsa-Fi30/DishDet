import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, useTheme } from "react-native-paper";

const Message = ({ message, sender, timestamp }) => {
  const isUser = sender === "user";
  const theme = useTheme();

  const formattedTime = new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <View style={[styles.messageRow, isUser && styles.userMessageRow]}>
      {/* Avatar */}
      {!isUser && (
        <Avatar.Image
          size={30}
          source={require("../../../assets/15.jpg")}
          style={styles.avatar}
        />
      )}
      <View
        style={[
          styles.messageContainer,
          isUser
            ? (styles.userMessageContainer,
              { backgroundColor: theme.colors.primary })
            : (styles.botMessageContainer,
              { backgroundColor: theme.colors.surfaceDisabled }),
        ]}
      >
        {/* Message */}
        <Text
          style={[
            styles.messageText,
            isUser
              ? { color: "#fff" }
              : { color: theme.dark ? "#fff" : "#F0f0f0" },
          ]}
        >
          {message}
        </Text>
        {/* Timestamp */}
        <Text
          style={[
            styles.timestamp,
            isUser
              ? { color: "#fff" }
              : { color: theme.dark ? "#fff" : "#F0f0f0" },
          ]}
        >
          {formattedTime}
        </Text>
      </View>
      {/* <Avatar.Image
        size={20}
        source={require("../../../assets/15.jpg")}
        style={styles.avatar}
      /> */}
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  messageRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 8,
    marginHorizontal: 5,
  },
  userMessageRow: {
    justifyContent: "flex-end",
  },
  messageContainer: {
    padding: 10,
    maxWidth: "78%",
    borderRadius: 20,
  },
  userMessageContainer: {
    backgroundColor: "red",
    alignSelf: "flex-end",
  },
  botMessageContainer: {
    backgroundColor: "#F0F0F0",
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 14,
  },

  avatar: {
    marginHorizontal: 5,
  },
  timestamp: {
    fontSize: 12,
    marginTop: 5,
    textAlign: "right",
  },
  userTimestamp: {
    color: "#fff", // Couleur du timestamp utilisateur
  },
  botTimestamp: {
    color: "#333", // Couleur du timestamp bot
  },
});
