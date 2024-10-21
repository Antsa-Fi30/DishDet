import { StyleSheet, Text, View } from "react-native";
import React from "react";
import RestaurantFeed from "./RestaurantFeed";

const restaurantPosts = [
  {
    id: "1",
    restaurantName: "Le Gourmet",
    description:
      "Découvrez notre nouvelle pizza spéciale avec une pâte fine et des ingrédients frais ! 🍕 #PizzaLovers #FreshIngredients",
    timeAgo: "Il y a 2 heures",
  },
  {
    id: "2",
    restaurantName: "Sushi Zen",
    description:
      "Sushi frais du jour avec un assortiment de thon, saumon et plus encore. 🍣 #Sushi #JapaneseCuisine",
    timeAgo: "Il y a 4 heures",
  },
  {
    id: "3",
    restaurantName: "Café Delice",
    description:
      "Savourez nos délicieux cappuccinos et croissants chauds pour bien commencer votre journée ☕🥐 #MorningCoffee #Bakery",
    timeAgo: "Il y a 1 jour",
  },
  {
    id: "4",
    restaurantName: "Bistro Belle Vie",
    description:
      "Dégustez notre spécialité de steak grillé avec une sauce maison unique ! 🥩 #SteakLovers #Grill",
    timeAgo: "Il y a 2 jours",
  },
  {
    id: "5",
    restaurantName: "La Dolce Vita",
    description:
      "Crèmes glacées artisanales disponibles dans plusieurs saveurs délicieuses ! 🍦 #IceCream #DessertHeaven",
    timeAgo: "Il y a 3 jours",
  },
];

const Actuality = () => {
  return (
    <View>
      <RestaurantFeed posts={restaurantPosts} />
    </View>
  );
};

export default Actuality;

const styles = StyleSheet.create({});
