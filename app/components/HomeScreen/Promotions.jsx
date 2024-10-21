import * as React from "react";
import { Dimensions, View, StyleSheet } from "react-native";

import { Text } from "react-native-paper";

import PromotionsCard from "./PromotionsCard";

const width = Dimensions.get("window").width;

const promotions = [
  {
    id: "1",
    image: "https://example.com/pizza-promo.jpg",
    title: "Réduction de 20% sur les pizzas",
    description:
      "Profitez d'une réduction de 20% sur toutes les pizzas commandées cette semaine. Offre valable jusqu'au 31 octobre !",
    validity: "Valable jusqu'au 31 octobre 2024",
    cta: "Commander maintenant",
    restaurantLogo: "https://example.com/logo-pizza-paradise.jpg",
    badge: "Populaire",
    rating: "⭐️⭐️⭐️⭐️ 4.5/5",
  },
  {
    id: "2",
    image: "https://example.com/pizza-promo.jpg",
    title: "Réduction de 10% sur les pizzas",
    description:
      "Profitez d'une réduction de 20% sur toutes les pizzas commandées cette semaine. Offre valable jusqu'au 31 octobre !",
    validity: "Valable jusqu'au 31 octobre 2024",
    cta: "Commander maintenant",
    restaurantLogo: "https://example.com/logo-pizza-paradise.jpg",
    badge: "Dummy",
    rating: "⭐️⭐️⭐️⭐️ 4.5/5",
  },
  {
    id: "3",
    image: "https://example.com/pizza-promo.jpg",
    title: "Réduction de 20% sur les packs",
    description:
      "Profitez d'une réduction de 20% sur toutes les pizzas commandées cette semaine. Offre valable jusqu'au 31 octobre !",
    validity: "Valable jusqu'au 31 octobre 2024",
    cta: "Commander maintenant",
    restaurantLogo: "https://example.com/logo-pizza-paradise.jpg",
    badge: "Unknown",
    rating: "⭐️⭐️⭐️⭐️ 4.5/5",
  },
  {
    id: "4",
    image: "https://example.com/pizza-promo.jpg",
    title: "Réduction de 20% sur les burger",
    description:
      "Profitez d'une réduction de 20% sur toutes les pizzas commandées cette semaine. Offre valable jusqu'au 31 octobre !",
    validity: "Valable jusqu'au 31 octobre 2024",
    cta: "Commander maintenant",
    restaurantLogo: "https://example.com/logo-pizza-paradise.jpg",
    badge: "VIP",
    rating: "⭐️⭐️⭐️⭐️ 4.5/5",
  },
  {
    id: "5",
    image: "https://example.com/pizza-promo.jpg",
    title: "Réduction de 50% sur les tacos",
    description:
      "Profitez d'une réduction de 20% sur toutes les pizzas commandées cette semaine. Offre valable jusqu'au 31 octobre !",
    validity: "Valable jusqu'au 31 octobre 2024",
    cta: "Commander maintenant",
    restaurantLogo: "https://example.com/logo-pizza-paradise.jpg",
    badge: "Dunno",
    rating: "⭐️⭐️⭐️⭐️ 4.5/5",
  },
];

const Promotions = () => {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
    </View>
  );
};

export default Promotions;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
