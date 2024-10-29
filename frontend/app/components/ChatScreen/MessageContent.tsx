import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import Message from "./Message"; // Importe le composant Message
import MessageInput from "./MessageInput"; // Importe le composant Message

const MessageContent = () => {
  // Exemple de données de chat
  const messages = [
    { id: "1", message: "Bonjour! Comment puis-je vous aider?", sender: "bot" },
    {
      id: "2",
      message: "Pouvez-vous m'expliquer les composants React Native?",
      sender: "user",
    },
    {
      id: "3",
      message:
        "Bien sûr! React Native vous permet de créer des interfaces mobiles...",
      sender: "bot",
    },
    {
      id: "4",
      message:
        "Bien sûr! React Native vous permet de créer des interfaces mobiles...",
      sender: "user",
    },
    {
      id: "5",
      message:
        "Bien sûr! React Native vous permet de créer des interfaces mobiles...",
      sender: "bot",
    },
    {
      id: "6",
      message:
        "Bien sûr! React Native vous permet de créer des interfaces mobiles...",
      sender: "user",
    },
    {
      id: "7",
      message:
        "Bien sûr! React Native vous permet de créer des interfaces mobiles...",
      sender: "bot",
    },
  ];

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        contentContainerStyle={styles.items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Message
            message={item.message}
            sender={item.sender}
            timestamp={new Date()}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
      <MessageInput
        onSend={(message: string) => console.log("Message envoyé:", message)}
      />
    </View>
  );
};

export default MessageContent;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 1,
  },
  items: {
    paddingVertical: 14,
  },
});
