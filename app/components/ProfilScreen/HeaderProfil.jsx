import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Avatar } from "react-native-paper";
import AntDesign from "@expo/vector-icons/AntDesign";

const HeaderProfil = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.button1}
        onPress={() => console.log("Pressed logout")}
      >
        <AntDesign name="logout" size={24} color="black" />
      </Pressable>
      <View style={styles.subContainer}>
        <Avatar.Image size={70} source={require("../../../assets/1.jpg")} />
        <Text style={styles.title}>Name</Text>
        <Text style={styles.localisation}>Localisation</Text>
      </View>
    </SafeAreaView>
  );
};

export default HeaderProfil;

const styles = StyleSheet.create({
  container: {
    // display: "flex",
    // flexDirection: "row",
    // alignItems: "center",
    // justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 10,
    borderBottomStartRadius: 35,
    borderBottomEndRadius: 35,
    marginBottom: 10,
  },
  subContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    gap: 6,
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 16,
    marginTop: 5,
  },
  localisation: {
    fontFamily: "Montserrat-Regular",
    fontSize: 14,
  },
  //Pas bon mais efficace
  button1: {
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    top: 60,
    left: 25,
  },
});
