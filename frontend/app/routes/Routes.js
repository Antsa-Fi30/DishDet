import { View, TouchableOpacity, StyleSheet } from "react-native";

//React navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//Icon:
import Octicons from "@expo/vector-icons/Octicons";

//Components header ,bottombar
import TabBar from "../components/templates/TabBar";

//Pages:
//Acceuil page:
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import HeaderHome from "../components/HomeScreen/HeaderHome";

//Profil page:
import HeaderProfil from "../components/ProfilScreen/HeaderProfil";
import ProfileScreen from "../screens/ProfileScreen/ProfileScreen";

//Saved
import SavedScreen from "../screens/SavedScreen/SavedScreen";

//Map
import MapScreen from "../screens/MapScreen/MapScreen";

//Chat page
import ChatScreen from "../screens/ChatScreen/ChatScreen";
import ChatHeader from "../components/ChatScreen/ChatHeader";

//Settings pages:
import EditScreen from "../screens/SettingsScreen/EditScreen";
import LanguageScreen from "../screens/SettingsScreen/LanguageScreen";
import LocationScreen from "../screens/SettingsScreen/LocationScreen";
import NotificationScreen from "../screens/SettingsScreen/NotificationScreen";
import FeedbackScreen from "../screens/SettingsScreen/FeedbackScreen";

const Tab = createBottomTabNavigator();
const SettingsStack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        options={{ header: () => <HeaderHome /> }}
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        options={{ header: () => <ChatHeader /> }}
        name="Chat"
        component={ChatScreen}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Map"
        component={MapScreen}
      />
      <Tab.Screen
        options={{ header: () => <HeaderHome /> }}
        name="Saved"
        component={SavedScreen}
      />
      <Tab.Screen options={{ header: () => <HeaderProfil /> }} name="Profile">
        {() => (
          <SettingsStack.Navigator initialRouteName="ProfileScreen">
            <SettingsStack.Screen
              name="ProfileScreen"
              component={ProfileScreen}
              options={{ headerShown: false }}
            />
            <SettingsStack.Screen
              name="Edit"
              component={EditScreen}
              options={{ headerShown: false }}
            />
            <SettingsStack.Screen
              name="Feedback"
              component={FeedbackScreen}
              options={{ headerShown: false }}
            />
            <SettingsStack.Screen
              name="Language"
              component={LanguageScreen}
              options={{ headerShown: false }}
            />
            <SettingsStack.Screen
              name="Location"
              component={LocationScreen}
              options={{ headerShown: false }}
            />
            <SettingsStack.Screen
              name="Notification"
              component={NotificationScreen}
              options={{ headerShown: false }}
            />
          </SettingsStack.Navigator>
        )}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({});
