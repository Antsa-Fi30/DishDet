import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import NotificationCard from "./NotificationCard";

const NotificationContent = () => {
  const notificationsData = [
    {
      id: 1,
      title: "Nouvelle offre spéciale",
      message: "Découvrez notre promotion spéciale sur les pizzas ce week-end.",
      timestamp: "Il y a 5 minutes",
    },
    {
      id: 2,
      title: "Mise à jour du menu",
      message:
        "Le restaurant 'Le Gourmet' a mis à jour son menu avec de nouveaux plats.",
      timestamp: "Il y a 1 heure",
    },
    {
      id: 3,
      title: "Avis laissé sur votre commentaire",
      message:
        "Un utilisateur a répondu à votre commentaire sur le restaurant 'Chez Pierre'.",
      timestamp: "Hier",
    },
    {
      id: 4,
      title: "Nouvelle fonctionnalité ajoutée",
      message:
        "Essayez notre nouvelle fonctionnalité de commande en ligne dès maintenant !",
      timestamp: "Il y a 3 jours",
    },
    {
      id: 1,
      title: "Nouvelle offre spéciale",
      message: "Découvrez notre promotion spéciale sur les pizzas ce week-end.",
      timestamp: "Il y a 5 minutes",
    },
    {
      id: 2,
      title: "Mise à jour du menu",
      message:
        "Le restaurant 'Le Gourmet' a mis à jour son menu avec de nouveaux plats.",
      timestamp: "Il y a 1 heure",
    },
    {
      id: 3,
      title: "Avis laissé sur votre commentaire",
      message:
        "Un utilisateur a répondu à votre commentaire sur le restaurant 'Chez Pierre'.",
      timestamp: "Hier",
    },
    {
      id: 4,
      title: "Nouvelle fonctionnalité ajoutée",
      message:
        "Essayez notre nouvelle fonctionnalité de commande en ligne dès maintenant !",
      timestamp: "Il y a 3 jours",
    },
  ];
  return (
    <View>
      <FlatList
        data={notificationsData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <NotificationCard notification={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default NotificationContent;

const styles = StyleSheet.create({});
