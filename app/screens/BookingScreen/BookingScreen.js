import { StyleSheet, Text, View } from "react-native";
import React from "react";
import BookingContent from "../../components/BookingScreen/BookingContent";

const BookingScreen = () => {
  return (
    <View style={styles.container}>
      <BookingContent />
    </View>
  );
};

export default BookingScreen;

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});
