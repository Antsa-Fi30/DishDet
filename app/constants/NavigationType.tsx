import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Définissez vos routes et leurs paramètres (s'il y en a)
export type RootStackParamList = {
  Home: undefined;
  NotificationDetails: { notificationId: number };
  RestaurantList: undefined;
  RestaurantDetails: { restaurant: any };
  Search: any;
  Message: { chatId: string };
  EditProfile: undefined;
  Location: undefined;
  Language: undefined;
  Notification: undefined;
  Feedback: undefined;
};

// Propriétés de navigation pour chaque écran
export type NotificationNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "NotificationDetails"
>;

export type RestaurantListNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "RestaurantList"
>;

export type RestaurantDetailsProp = NativeStackNavigationProp<
  RootStackParamList,
  "RestaurantDetails"
>;

export type SearchNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Search"
>;

export type ChatItemNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Message"
>;

export type EditProfileNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "EditProfile"
>;

export type LocationNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Location"
>;

export type LanguageNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Language"
>;

export type FeedbackNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Feedback"
>;

// Propriétés de route pour chaque écran
export type RestaurantListRouteProp = RouteProp<
  RootStackParamList,
  "RestaurantList"
>;

export type RestaurantDetailsRouteProp = RouteProp<
  RootStackParamList,
  "RestaurantDetails"
>;

export type SearchRouteProp = RouteProp<RootStackParamList, "Search">;

export type MessageRouteProp = RouteProp<RootStackParamList, "Message">;

export type NotificationDetailsRouteProp = RouteProp<
  RootStackParamList,
  "NotificationDetails"
>;

export type EditProfileRouteProp = RouteProp<RootStackParamList, "EditProfile">;

export type LocationRouteProp = RouteProp<RootStackParamList, "Location">;

export type LanguageRouteProp = RouteProp<RootStackParamList, "Language">;

export type NotificationRouteProp = RouteProp<
  RootStackParamList,
  "Notification"
>;

export type FeedbackRouteProp = RouteProp<RootStackParamList, "Feedback">;
