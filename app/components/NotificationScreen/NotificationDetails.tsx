import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../constants/NavigationType";

type NotificationDetailsRouteProp = RouteProp<
  RootStackParamList,
  "NotificationDetails"
>;

const NotificationDetails: React.FC = () => {
  const route = useRoute<NotificationDetailsRouteProp>();
  const navigation = useNavigation();
  const { notificationType, details } = route.params;

  const renderNotificationContent = () => {
    switch (notificationType) {
      case "promotion":
        return (
          <View>
            <Text style={styles.title}>Promotion Spéciale !</Text>
            <Text style={styles.description}>{details.offerDetails}</Text>
            <Button
              title="Voir Restaurants"
              onPress={() => navigation.navigate("RestaurantList")}
            />
          </View>
        );
      case "newRestaurants":
        return (
          <View>
            <Text style={styles.title}>Nouveaux Restaurants Disponibles !</Text>
            {details.newRestaurants.map((restaurant, index) => (
              <Button
                key={index}
                title={restaurant.name}
                onPress={() =>
                  navigation.navigate("RestaurantDetails", { restaurant })
                }
              />
            ))}
          </View>
        );
      case "reminder":
        return (
          <View>
            <Text style={styles.title}>Rappel</Text>
            <Text style={styles.description}>{details.reminderMessage}</Text>
            <Button
              title="Voir Détails"
              onPress={() =>
                navigation.navigate("RestaurantDetails", {
                  restaurant: details.restaurant,
                })
              }
            />
          </View>
        );
      default:
        return (
          <Text style={styles.description}>Type de notification inconnu</Text>
        );
    }
  };

  return <View style={styles.container}>{renderNotificationContent()}</View>;
};

export default NotificationDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
});
