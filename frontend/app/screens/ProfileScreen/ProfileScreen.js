import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProfilContent from "../../components/ProfilScreen/ProfilContent";

const ProfileScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <ProfilContent />
    </ScrollView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
