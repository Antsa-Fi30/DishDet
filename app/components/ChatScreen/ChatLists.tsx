// App.js
import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ChatItem from "./ChatItem";

const ChatLists = () => {
  const persons = [
    {
      name: "Alice1",
      lastMessage: "Salut ! Comment ça va ?",
      timestamp: "10:30 AM",
    },
    {
      name: "Alice2",
      lastMessage: "On se voit ce soir ?",
      timestamp: "09:15 AM",
    },
    {
      name: "Alice3",
      lastMessage: "D'accord, merci !",
      timestamp: "Yesterday",
    },
    {
      name: "Alice3",
      lastMessage: "D'accord, merci !",
      timestamp: "Yesterday",
    },
    {
      name: "Alice3",
      lastMessage: "D'accord, merci !",
      timestamp: "Yesterday",
    },
    {
      name: "Alice3",
      lastMessage: "D'accord, merci !",
      timestamp: "Yesterday",
    },
    {
      name: "Alice3",
      lastMessage: "D'accord, merci !",
      timestamp: "Yesterday",
    },
    {
      name: "Alice3",
      lastMessage: "D'accord, merci !",
      timestamp: "Yesterday",
    },
  ];
  return (
    <>
      <FlatList
        style={styles.ListContainer}
        data={persons}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => <ChatItem chat={item} />}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  ListContainer: {
    marginBottom: 126,
  },
});

export default ChatLists;
