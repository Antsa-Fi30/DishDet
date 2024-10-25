import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// Définissez vos routes et leurs paramètres (s'il y en a)
export type RootStackParamList = {
  Home: undefined;
  Message: { chatId: string }; // Ajoutez des paramètres si nécessaire
};

// Propriété de navigation pour l'écran ChatItem
export type ChatItemNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Message"
>;

// Propriété de route pour l'écran Message
export type MessageRouteProp = RouteProp<RootStackParamList, "Message">;
