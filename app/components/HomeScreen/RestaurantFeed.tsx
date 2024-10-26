import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import RestaurantPostCard from "./RestaurantPostCard";

type RestaurantActuality = {
  id: string;
  restaurantName: string;
  description: string;
  timeAgo: string;
};

type RestaurantFeedProps = {
  posts: RestaurantActuality[];
};

const RestaurantFeed: React.FC<RestaurantFeedProps> = ({ posts }) => {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <RestaurantPostCard post={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: 10 }}
      />
    </View>
  );
};

export default RestaurantFeed;

const styles = StyleSheet.create({});
