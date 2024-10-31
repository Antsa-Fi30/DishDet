import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NotificationDetailsParams =
  | { type: "promotion"; offerDetails: string; restaurants: any[] }
  | { type: "newRestaurants"; newRestaurants: any[] }
  | { type: "reminder"; reminderMessage: string; restaurant: any };

// Définissez vos routes et leurs paramètres (s'il y en a)
export type RootStackParamList = {
  Login: undefined;
  Signin: undefined;
  Home: undefined;
  Notifications: any;
  NotificationDetails: NotificationDetailsParams;
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
export type LoginNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;
export type SigninNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Signin"
>;

export type NotificationsNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Notifications"
>;

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

export type HomeNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Home"
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

export type NotificationsRouteProp = RouteProp<
  RootStackParamList,
  "Notifications"
>;

export type EditProfileRouteProp = RouteProp<RootStackParamList, "EditProfile">;

export type LocationRouteProp = RouteProp<RootStackParamList, "Location">;

export type LoginRouteProp = RouteProp<RootStackParamList, "Login">;

export type SigninRouteProp = RouteProp<RootStackParamList, "Signin">;

export type HomeRouteProp = RouteProp<RootStackParamList, "Home">;

export type LanguageRouteProp = RouteProp<RootStackParamList, "Language">;

export type NotificationRouteProp = RouteProp<
  RootStackParamList,
  "Notification"
>;

export type FeedbackRouteProp = RouteProp<RootStackParamList, "Feedback">;
