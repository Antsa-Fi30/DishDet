import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList, ActivityIndicator } from "react-native";
import axios from "axios";

const Recommendations = () => {
  const [loading, setLoading] = useState(true);
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        const response = await axios.post("http://localhost:5000/recommend", {
          user_id: "user1",
        });
        setRecommendations(response.data);
      } catch (error) {
        console.error("Error fetching recommendations:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      data={recommendations}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
        </View>
      )}
    />
  );
};

export default Recommendations;
