import React from "react";
import { StyleSheet, View, ScrollView } from "react-native";
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
      <ScrollView contentContainerStyle={styles.container}>
        {posts.map((post) => (
          <RestaurantPostCard key={post.id} post={post} />
        ))}
      </ScrollView>
    </View>
  );
};

export default RestaurantFeed;

const styles = StyleSheet.create({
  container: {
    marginBottom: 70,
  },
});
