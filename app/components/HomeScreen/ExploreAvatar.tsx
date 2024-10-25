import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { Avatar } from "react-native-paper";

type ExploreProps = {
  name: string;
};

const ExploreAvatar: React.FC<ExploreProps> = ({ name }) => {
  return (
    <TouchableOpacity style={styles.container}>
      {/* Avatar Image */}
      <Avatar.Image
        size={85}
        source={require("../../../assets/15.jpg")}
        style={styles.avatar}
      />
      {/* Overlay */}
      <View style={styles.overlay} />
      {/* Text on top of the avatar */}
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
};

export default ExploreAvatar;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    position: "absolute", // Avatar is positioned in the background
  },
  overlay: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.4)", // Semi-transparent grey overlay
    width: 90,
    height: 90,
    borderRadius: 50, // To match the circular shape of the avatar
  },
  title: {
    position: "absolute",
    color: "#fff", // White color for the text to be readable
    fontFamily: "Montserrat-Bold",
    fontSize: 15,
    textAlign: "center",
  },
});
