import React from "react";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NotificationNavigationProp } from "../../constants/NavigationType";

const NotificationCard = ({ notification }) => {
  const navigation = useNavigation<NotificationNavigationProp>();

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.push("NotificationDetails", {
          notificationId: notification.id,
        })
      }
    >
      <Image
        style={styles.icon}
        source={require("../../../assets/1.jpg")} // Remplace par le chemin de ton icône de notification
      />
      <View style={styles.cardContent}>
        <Text style={styles.title}>{notification.title}</Text>
        <Text style={styles.message} numberOfLines={2}>
          {notification.message}
        </Text>
        <Text style={styles.timestamp}>{notification.timestamp}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    padding: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    backgroundColor: "white",
    borderRadius: 12,
    shadowColor: "#00000021",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#f0f0f0", // Couleur de fond par défaut si l'image est absente
    marginRight: 10,
  },
  cardContent: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    fontFamily: "Montserrat-Bold",
    color: "#333",
    marginBottom: 5,
  },
  message: {
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    color: "#555",
  },
  timestamp: {
    fontSize: 12,
    fontFamily: "Montserrat-Regular",
    color: "#888",
    marginTop: 5,
  },
});
