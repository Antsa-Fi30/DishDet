import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Avatar } from "react-native-paper";

const ChatHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Messages</Text>
        <TouchableOpacity>
          <Avatar.Image size={45} source={require("../../../assets/1.jpg")} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginHorizontal: 30,
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
  },
});
