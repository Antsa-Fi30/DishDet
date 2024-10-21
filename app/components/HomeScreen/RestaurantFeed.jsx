import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import RestaurantPostCard from "./RestaurantPostCard";

const RestaurantFeed = ({ posts }) => {
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
