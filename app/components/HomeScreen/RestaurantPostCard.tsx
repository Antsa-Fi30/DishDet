import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Avatar, Surface } from "react-native-paper";
import Octicons from "@expo/vector-icons/Octicons";

type RestaurantActuality = {
  id: string;
  restaurantName: string;
  description: string;
  timeAgo: string;
};

type RestaurantPostCardProps = {
  post: RestaurantActuality;
};

const RestaurantPostCard: React.FC<RestaurantPostCardProps> = ({ post }) => {
  return (
    <Surface mode="flat" style={styles.card}>
      {/* Header avec Avatar et Nom du restaurant */}
      <View style={styles.cardHeader}>
        <Avatar.Image size={40} source={require("../../../assets/1.jpg")} />
        <Text style={styles.restaurantName}>{post.restaurantName}</Text>
      </View>

      {/* Image de la publication */}
      <Image
        source={require("../../../assets/15.jpg")}
        style={styles.postImage}
      />

      {/* Description de la publication */}
      <Text style={styles.description}>{post.description}</Text>

      {/* Section d'actions (Like, Comment, Share) */}
      <View style={styles.actionRow}>
        <TouchableOpacity style={styles.actionButton}>
          <Octicons name="heart" size={24} color="red" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Octicons name="comment" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Octicons name="share" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </Surface>
  );
};

export default RestaurantPostCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginVertical: 5,
    padding: 10,
  },
  cardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  restaurantName: {
    fontFamily: "Montserrat-Bold",
    marginLeft: 10,
    fontSize: 16,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginVertical: 10,
  },
  description: {
    fontSize: 14,
    fontFamily: "Montserrat-Regular",
    color: "#333",
    marginVertical: 5,
  },
  actionRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
  },
});
