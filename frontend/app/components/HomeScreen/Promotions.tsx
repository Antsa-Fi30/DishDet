import { Dimensions, View, StyleSheet, FlatList } from "react-native";

import PromotionsCard from "./PromotionsCard";
import HeadingTitle from "../templates/HeadingTitle";
import { useEffect, useState } from "react";
import axios from "axios";

const width = Dimensions.get("window").width;

const Promotions = () => {
  const [promos, setPromos] = useState([]);

  useEffect(() => {
    const fetchPromos = async () => {
      try {
        const response = await axios.get(
          "http://192.168.43.205:5000/api/getPromotionsWithRestaurantName"
        );
        setPromos(response.data);
      } catch (error) {
        console.error("Erreur de récupération des promos :", error);
      }
    };

    fetchPromos();
  }, []);

  console.log(promos);

  return (
    <View style={styles.container}>
      <HeadingTitle viewAll={false} text={"Promotions"} />
      <FlatList
        data={promos}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <PromotionsCard item={item} index={index} />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Promotions;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
});
