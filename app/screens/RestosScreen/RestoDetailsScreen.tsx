import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import { Text, Title, Paragraph } from "react-native-paper";
import { MaterialIcons, Octicons } from "@expo/vector-icons";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../constants/NavigationType";
import { SafeAreaView } from "react-native-safe-area-context";
import RestaurantDetailsContent from "../../components/Restos/RestaurantDetailsContent";

type RestaurantDetailsRouteProp = RouteProp<
  RootStackParamList,
  "RestaurantDetails"
>;

const RestaurantDetails: React.FC = () => {
  const route = useRoute<RestaurantDetailsRouteProp>();
  const navigation = useNavigation();
  const { restaurant } = route.params; // Récupère les données du restaurant

  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.buttonback} onPress={() => navigation.goBack()}>
        <Octicons name="arrow-left" size={30} color={"white"} />
      </Pressable>
      <RestaurantDetailsContent restaurant={restaurant} />
    </SafeAreaView>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  buttonback: {
    position: "absolute",
    top: 40,
    left: 24,
    zIndex: 1000,
  },
});
