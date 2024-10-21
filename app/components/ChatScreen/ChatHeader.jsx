import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ChatHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>ChatHeader</Text>
      </View>
    </SafeAreaView>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25,
  },
});
