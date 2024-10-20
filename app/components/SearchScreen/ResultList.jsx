// ResultList.js
import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import ResultCard from "./ResultCard";

const ResultList = () => {
  const data = [
    {
      id: 1,
      image: "assets/1.jpg",
      name: "Restaurant A",
      location: "Paris, France",
      rating: 4.5,
    },
    {
      id: 2,
      image: "assets/1.jpg",
      name: "Restaurant B",
      location: "Berlin, Germany",
      rating: 4.0,
    },
    {
      id: 2,
      image: "assets/1.jpg",
      name: "Restaurant B",
      location: "Berlin, Germany",
      rating: 4.0,
    },
    {
      id: 2,
      image: "assets/1.jpg",
      name: "Restaurant B",
      location: "Berlin, Germany",
      rating: 4.0,
    },
    {
      id: 2,
      image: "assets/1.jpg",
      name: "Restaurant B",
      location: "Berlin, Germany",
      rating: 4.0,
    },
    // Ajoutez d'autres données ici...
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Results:</Text>

      <ScrollView>
        {data.map((item) => (
          <ResultCard
            key={item.id}
            image={item.image}
            name={item.name}
            location={item.location}
            rating={item.rating}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#f9f9f9",
  },
  label: {
    fontFamily: "Montserrat-SemiBold",
    paddingBottom: 10,
  },
});

export default ResultList;
