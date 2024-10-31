import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import SearchSource from "./SearchSource";
import RestoList from "././RestoList";
import ExploreList from "./ExploreList";
import Promotions from "./Promotions";
import axios from "axios";

const typeresto = [
  { id: 1, name: "Traditionnelle" },
  { id: 2, name: "Italien" },
  { id: 3, name: "Romantic" },
  { id: 4, name: "Nothing" },
  { id: 5, name: "Something" },
  { id: 6, name: "Sad" },
];

const NearbyContent = () => {
  const [restos, setRestos] = useState([]);

  useEffect(() => {
    const fetchResto = async () => {
      try {
        const response = await axios.get(
          "http://192.168.43.205:5000/api/restaurants"
        );
        setRestos(response.data);
      } catch (error) {
        console.error(error.response ? error.response.data : error.message);
      }
    };

    fetchResto();
  }, []);

  console.log(restos);

  return (
    <ScrollView style={styles.container}>
      <SearchSource />
      <Promotions />
      <ExploreList typeresto={typeresto} label={""} />
      <RestoList restos={restos} title={"Nearby"} label={""} />
    </ScrollView>
  );
};

export default NearbyContent;

const styles = StyleSheet.create({
  container: {
    marginBottom: 70,
  },
});
