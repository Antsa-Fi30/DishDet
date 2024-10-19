import { StyleSheet, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import HomeContent from "../../components/HomeScreen/HomeContent";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <HomeContent navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
});
