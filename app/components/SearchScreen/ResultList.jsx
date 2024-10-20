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
      id: 3,
      image: "assets/1.jpg",
      name: "Restaurant C",
      location: "Berlin, Germany",
      rating: 4.0,
    },
    {
      id: 4,
      image: "assets/1.jpg",
      name: "Restaurant D",
      location: "Berlin, Germany",
      rating: 5,
    },
    {
      id: 5,
      image: "assets/1.jpg",
      name: "Restaurant E",
      location: "Berlin, Germany",
      rating: 4.0,
    },
    // Ajoutez d'autres données ici...
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Results:</Text>

      <ScrollView style={styles.containerList}>
        {data.map((item) => (
          <ResultCard key={item.id} item={item} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerList: {
    paddingVertical: 15,
  },
  label: {
    fontFamily: "Montserrat-SemiBold",
    paddingBottom: 10,
  },
});

export default ResultList;
