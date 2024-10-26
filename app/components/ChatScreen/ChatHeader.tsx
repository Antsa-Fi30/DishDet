import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, TextInput, Button, useTheme } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";

const ChatHeader = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [newMessage, setNewMessage] = useState("");
  const [user, setUser] = useState("");
  const theme = useTheme();

  const handleSendMessage = () => {
    // Ajoute ici la logique pour envoyer un nouveau message
    console.log("Nouveau message:", newMessage);
    console.log("vers:", user);
    setModalVisible(false);
    setUser("");
    setNewMessage("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Messages</Text>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <AntDesign
            name="plus"
            size={30}
            color={theme.dark ? "white" : "black"}
          />
        </TouchableOpacity>
      </View>

      {/* Modal pour composer un nouveau message */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Nouveau Message</Text>
            <TextInput
              mode="outlined"
              label="To"
              placeholder="A qui?"
              value={user}
              onChangeText={setUser}
            />
            <TextInput
              mode="outlined"
              label="Message"
              placeholder="Tapez votre message..."
              value={newMessage}
              onChangeText={setNewMessage}
              multiline
              style={styles.input}
            />
            <View style={styles.buttonContainer}>
              <Button
                mode="contained"
                onPress={handleSendMessage}
                style={styles.sendButton}
              >
                Envoyer
              </Button>
              <Button
                mode="text"
                onPress={() => {
                  setModalVisible(false);
                  setUser("");
                  setNewMessage("");
                }}
              >
                Annuler
              </Button>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 24,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Fond semi-transparent
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    marginBottom: 15,
    height: 100, // Hauteur ajustée pour simuler un champ de texte plus grand
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sendButton: {
    backgroundColor: "#FF4D4D",
  },
  cancelButton: {
    color: "#FF4D4D",
  },
});
