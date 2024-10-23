// App.js
import React from "react";
import { ScrollView, StyleSheet, SafeAreaView } from "react-native";
import ChatItem from "./ChatItem";

const ChatMessages = () => {
  const chats = [
    {
      id: 1,
      name: "Alice",
      lastMessage: "Salut ! Comment ça va ?",
      timestamp: "10:30 AM",
    },
    {
      id: 2,
      name: "Bob",
      lastMessage: "On se voit ce soir ?",
      timestamp: "09:15 AM",
    },
    {
      id: 3,
      name: "Charlie",
      lastMessage: "D'accord, merci !",
      timestamp: "Yesterday",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {chats.map((chat) => (
          <ChatItem
            key={chat.id}
            name={chat.name}
            lastMessage={chat.lastMessage}
            timestamp={chat.timestamp}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
});

export default ChatMessages;
