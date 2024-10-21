import { StyleSheet, View, ImageBackground } from "react-native";
import { Text, Surface, Badge, Button } from "react-native-paper";
import React from "react";

const PromotionsCard = ({ index, item }) => {
  return (
    <Surface key={index} style={styles.surface}>
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.imageBackground}
        imageStyle={styles.imageStyle}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.validity}>{item.validity}</Text>
          <View style={styles.ctacontainer}>
            <Button
              mode="contained"
              onPress={() => console.log("Commander maintenant")}
              style={styles.ctaButton}
              labelStyle={styles.ctaLabel}
            >
              {item.cta}
            </Button>
            <Badge size={25} style={styles.badge}>
              {item.badge}
            </Badge>
          </View>
        </View>
      </ImageBackground>
    </Surface>
  );
};

export default PromotionsCard;

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: 200,
    justifyContent: "flex-end",
  },
  imageStyle: {
    borderRadius: 15,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
  },
  badge: {
    alignSelf: "flex-start",
    backgroundColor: "#2ecc71",
    color: "white",
    marginBottom: 10,
  },
  title: {
    fontFamily: "Montserrat-Bold",
    fontSize: 20,
    color: "#fff",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#ddd",
    marginBottom: 10,
  },
  validity: {
    fontSize: 12,
    color: "#aaa",
    marginBottom: 15,
  },
  ctaButton: {
    backgroundColor: "#f39c12",
    alignSelf: "flex-start",
  },
  ctaLabel: {
    color: "white",
    fontSize: 14,
  },
  ctacontainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
